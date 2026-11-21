# 操作系统期末复习知识库

**先做两件事：** 打开[四类简答题](.agents/skills/os-final-review/short-answers.md)，合上答案各说一遍；再打开[课后题首刷清单](.agents/skills/os-final-review/exercises/README.md)，先独立做题，再对照解析。教材是汤小丹、王红玲、姜华、汤子瀛编著的《计算机操作系统（慕课版）》，2021 年 6 月第 1 版。

本库按你给出的**大题考纲**组织主线。首刷题是与考纲最直接对应的教材习题，不代表确定会考。其他章节留作检索；已确认期末包含选择题，但选择题具体考纲尚未提供；网页选择题覆盖全书 12 章，并可筛选重点章节。填空题、判断题是否考试及其范围仍未知。

## 网页复习工作台

在线使用：[打开复习工作台](https://songgui196.github.io/os-final-review/)。也可以直接打开 [网页首页](web/index.html)，离线阅读全部资料、搜索知识点、随机组卷并重练错题。使用说明见 [网页说明](web/README.md)。

## 简答题：按题干选择答案，而不是背一整章

| 考纲 | 要写出的关键词 | 课后题起点 |
|---|---|---|
| 操作系统的特征 | 并发、共享、虚拟、异步；并发和共享为何互为条件 | 习题 1 第 11、12、27 题 |
| 处理机调度 | 高/中/低级调度、调度时机、抢占原则、不同系统的调度目标 | 习题 3 第 1、5–8、10–12 题 |
| 进程同步 | 同步与互斥、临界资源与临界区、四条准则、P/V 原语 | 习题 4 第 1–5、8、10–12 题 |
| I/O | I/O 的功能与四层软件、四种控制方式、设备无关性、SPOOLing | 习题 7 第 1–2、5–9、11–12 题 |

## 计算与综合题：先做这里

| 考纲 | 解析与答案 | 首刷题（教材） |
|---|---|---|
| 进程调度 | [甘特图、队列与周转时间](.agents/skills/os-final-review/exercises/01-cpu-scheduling.md) | 习题 3 第 19–20 题 |
| 银行家算法 | [安全序列、试分配与回滚](.agents/skills/os-final-review/exercises/02-bankers.md) | 习题 3 第 22 题；§3.7.2 的请求例题 |
| 生产者—消费者 | [标准模板、奇偶与水果分类、双缓冲流水线](.agents/skills/os-final-review/exercises/03-producer-consumer.md) | 习题 4 第 16、18–20 题 |
| 缺页率 | [OPT、FIFO、LRU、Clock 与逐次跟踪](.agents/skills/os-final-review/exercises/04-page-fault-rate.md) | 习题 6 第 18–20 题，补第 17 题 |
| 磁盘访问时间 / EAT | [机械磁盘耗时、缺页 EAT、访存路径](.agents/skills/os-final-review/exercises/05-disk-and-eat.md) | 习题 7 第 15 题；习题 6 第 14、15、21 题 |

**看到 “EAT” 先圈概率和单位。** 只有转速、寻道、传输率等参数，通常是**一次磁盘访问时间**；出现快表命中率、缺页率或换页的磁盘时间，通常是**内存有效访问时间**。一个可以作为另一个的缺页分支成本，不能把两套公式直接相加。

## 怎么用

- **第一轮：** 口述四类简答，做首刷题。做题留痕：甘特图、`Work` 表、信号量初值、页框轨迹、EAT 分支表，至少各写一次。
- **第二轮：** 重做错题，不照抄答案；用[限时模拟卷](.agents/skills/os-final-review/mock-exam.md)检验是否能独立迁移。交卷后再看[评分参考](.agents/skills/os-final-review/mock-answers.md)。
- **考前速查：** [公式与口径](.agents/skills/os-final-review/cheatsheet.md) · [解题模板](.agents/skills/os-final-review/patterns.md) · [术语表](.agents/skills/os-final-review/glossary.md)。
- **需要回看原理：** [12 章索引](.agents/skills/os-final-review/SKILL.md#章节索引) · [版本、页码和题目歧义](.agents/skills/os-final-review/sources.md)。

**页码读法：** `书 p.197 / PDF 第 218 页` 指纸面印刷页和阅读器从封面数起的页序；本附件正文的换算是 `PDF 页序 = 书页 + 21`。课后题均以“习题章号 + 题号”定位；这里保留解题数据，题干以原书为准，解析不是官方答案。
