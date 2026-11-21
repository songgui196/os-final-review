# 综合题 3：生产者—消费者与 P/V

**教材定位：** §4.4.1、§4.6.1（书 p.116–118、123–125 / PDF 137–139、144–146）；习题 4 第 13–20 题（书 p.134–135 / PDF 155–156）。

## 先列约束，再写代码

| 约束 | 信号量设计 | 初值 |
|---|---|---:|
| 放之前要有空位 | `empty` 计可用空位 | 缓冲区容量 `N`（初始全空） |
| 取之前要有合格物品 | `full`，或按可消费类别拆成 `odd/even` 等 | 初始已有对应物品数（通常 0） |
| 操作队列/盘子必须互斥 | `mutex`，临界区只留放、取与共享索引更新 | 1 |

记录型 `P` 先减，结果 `<0` 则阻塞；`V` 先加，结果 `≤0` 则唤醒。标准模板（伪代码）：

```text
semaphore empty=N, full=0, mutex=1
producer (repeat):              consumer (repeat):
    item = produce()               P(full)
    P(empty)                       P(mutex)
    P(mutex)                        item = get()
    put(item)                      V(mutex)
    V(mutex)                       V(empty)
    V(full)                        consume(item)
```

为什么资源 `P` 必须放在锁前？缓冲区满时，如果生产者先持有 `mutex` 再因 `P(empty)` 阻塞，就没人能进来取物并 `V(empty)`；空缓冲时消费者同理。`full` 在真实放入后才发布，`empty` 在真实取出后才发布。单看临界区，每放入一件物品减少一个物理空位、每取出一件恢复一个；并发时存在已预留的许可和负信号量，不能把两个原始计数值简单相加当物理容量。

## 习题 4 第 16 题｜一个生产者，两种消费者

书 p.134 / PDF 155。容量 `N`；P1 产生整数，P2 只取奇数，P3 只取偶数。共用一个缓冲区：`empty=N, mutex=1, odd=0, even=0`。`getodd/geteven` 能从缓冲区选取各自类别，不是盲取队头。三个进程反复执行：

```text
P1: x ← produce(); P(empty); P(mutex); put(x); V(mutex);
    if x is odd: V(odd) else: V(even)
P2: P(odd);  P(mutex); x ← getodd();  V(mutex); V(empty); countodd()
P3: P(even); P(mutex); x ← geteven(); V(mutex); V(empty); counteven()
```

`empty` 不应分成奇偶两套，因为任何空格都能放它们；消费许可才拆类别。两个统计函数在本题分别只由其唯一消费者调用，可放在锁外；若改题让多个线程更新同一个计数，统计本身也要保护。

## 习题 4 第 18–20 题｜三种迁移

### 第 18 题：计算到打印的单槽（书 p.135 / PDF 156）

`empty=1, full=0`；在**一生产者、一消费者**且访问单槽时，两信号量即可用交替握手排他：

```text
计算：重复 { x←compute(); P(empty); slot←x; V(full) }
打印：重复 { P(full); x←slot; V(empty); print(x) }
```

先把数据复制到局部变量再归还槽位；否则 `print(slot)` 时可能被下一项覆盖。扩展为有共享索引的多槽、多进程时按标准模板考虑 `mutex`。

### 第 19 题：两段单槽流水线（书 p.135 / PDF 156）

每段独立：`empty1=empty2=1, full1=full2=0`。存在局部临时记录时：

```text
P1: r←read_disk(); P(empty1); buf1←r; V(full1)
P2: P(full1); r←buf1; V(empty1); P(empty2); buf2←r; V(full2)
P3: P(full2); r←buf2; V(empty2); print(r)
```

每行循环。直接从 `buf1` 复制到 `buf2` 也可以，但要先取得 `full1`、`empty2`，完整复制后才归还 `empty1`，再发布 `full2`。不要用一组 `full/empty` 管两段。

### 第 20 题：父亲放水果，子女分类取（书 p.135 / PDF 156）

`empty=5, mutex=1, apple=0, orange=0`。父亲选定水果，`P(empty)` → `P(mutex)` → 放 → `V(mutex)` → 对对应种类 `V`。儿子等 `P(orange)`，女儿等 `P(apple)`；之后都 `P(mutex)` → 取本种 → `V(mutex)` → `V(empty)`，享用放在锁外。与第 16 题同一模型，差别只有容量与类别名。

## 相邻题：记录型信号量与座位/叫号

- **习题 4 第 13–15 题**（书 p.134 / PDF 155）：第 13 题当前值 −1，**1** 人在等；第 14 题 `m≥1` 个进程共享一资源，每人至多一个未归还的许可，范围 `[1−m,1]`；第 15 题 4 人竞争 3 个许可，范围 `[-1,3]`。下界 = 初值减所有可能同时发生的 P 数，不能把总人数当等待人数。
- **第 17 题**（书 p.134–135 / PDF 155–156）：把服务窗口和等候座位分开。用 `seats=10`、`ticketLock=1`、`queueLock=1`、`ready=0`，每位顾客的 `called[i], atWindow[i], done[i]` 都从 0 开始。顾客先占一个等候席（满席行为按题意设为离开或在外等）；互斥取号并按取号顺序把自身入队，释放锁后 `V(ready)`，再依次 `P(called[i]); V(atWindow[i]); P(done[i])`。店员循环 `P(ready)`，锁内取队首 `i`、解锁，叫号时释放一个等候席 `V(seats)` 并 `V(called[i])`，等 `P(atWindow[i])`，服务完 `V(done[i])`。等待事件时不持有取号锁或队列锁。

[题库入口](README.md) · [同步四准则与管程](../chapters/ch04-synchronization.md)
