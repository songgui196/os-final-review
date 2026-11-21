/* 自编练习题，非教材原题或官方答案。 */
window.OS_QUESTIONS = [
  {
    "id": "c1-s01",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "单处理机系统通过交替执行，让多个程序在同一段时间内推进，体现了哪一特征？",
    "options": [
      "并发",
      "并行",
      "连续性",
      "确定性"
    ],
    "correct": [
      0
    ],
    "explanation": "并发强调同一时间段内推进；并行强调同一时刻同时执行。单核交替执行可以实现并发。",
    "tag": "四个特征",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s02",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "关于并发与共享的关系，正确的是？",
    "options": [
      "二者互为条件，共享需有序管理以支持并发",
      "只有多核才需要资源共享",
      "共享必然允许所有进程同时无条件访问",
      "二者互不相关"
    ],
    "correct": [
      0
    ],
    "explanation": "并发产生共享需求，有序共享又支撑并发。共享既有互斥共享，也有在一段时间内的同时共享。",
    "tag": "四个特征",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s03",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "操作系统的“异步性”主要指什么？",
    "options": [
      "进程的推进速度和交替时机具有不确定性",
      "任何程序的运行结果都完全随机",
      "所有 I/O 都必须使用异步接口",
      "进程无法通过同步约束执行顺序"
    ],
    "correct": [
      0
    ],
    "explanation": "调度、I/O、资源等待和中断会影响进程推进；正确的同步仍可保证结果满足约束。",
    "tag": "异步性",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s04",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "把一个物理处理机分时提供给多个进程，主要体现了哪一特征？",
    "options": [
      "虚拟性",
      "设备独占性",
      "程序顺序性",
      "物理并行性"
    ],
    "correct": [
      0
    ],
    "explanation": "时分复用使多个进程逻辑上各有执行机会，是处理机虚拟化的一种表现。",
    "tag": "虚拟性",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s05",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "分时系统最直接关注的目标通常是？",
    "options": [
      "交互响应与公平性",
      "只追求单个长作业的完成时间",
      "所有任务都有硬截止时间",
      "禁止多个用户共享系统"
    ],
    "correct": [
      0
    ],
    "explanation": "分时强调交互响应和公平；批处理重吞吐和周转，实时系统重截止要求。",
    "tag": "系统类型",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s06",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "实时系统与一般分时系统相比，更强调什么？",
    "options": [
      "在规定截止时间内完成任务",
      "只要最终能完成即可",
      "让每个任务获得完全相同的周转时间",
      "永远不发生中断"
    ],
    "correct": [
      0
    ],
    "explanation": "实时系统重视截止时间与可预测性，不能只以平均响应快慢判断。",
    "tag": "系统类型",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s07",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "用户程序请求受控的内核服务，典型途径是？",
    "options": [
      "系统调用",
      "直接修改任意内核数据",
      "绕过权限检查写设备寄存器",
      "把任意库函数都视为特权指令"
    ],
    "correct": [
      0
    ],
    "explanation": "系统调用通过受控入口获得内核服务；库函数可能封装系统调用，也可能完全在用户态执行。",
    "tag": "系统调用",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s08",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "一次用户态到内核态的切换，是否必然切换进程？",
    "options": [
      "不必然，可能仍由同一进程继续执行",
      "必然切换到另一个用户进程",
      "必然销毁当前进程",
      "只会发生在多核系统"
    ],
    "correct": [
      0
    ],
    "explanation": "模式切换与进程切换不同。系统调用进入内核处理后可返回原进程。",
    "tag": "运行环境",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s09",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "时钟中断与时间片轮转策略的关系，正确的是？",
    "options": [
      "时钟中断提供重新获得控制权的机会，RR 决定轮转规则",
      "二者都是纯硬件机制，无需操作系统",
      "时钟中断本身就决定下一个运行进程",
      "RR 可以使单核同刻执行多个线程"
    ],
    "correct": [
      0
    ],
    "explanation": "机制提供能力，策略决定如何使用。时钟机制不等于具体的就绪队列选择策略。",
    "tag": "机制与策略",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-s10",
    "chapter": 1,
    "type": "single",
    "difficulty": "基础",
    "stem": "微内核结构的一般取舍是？",
    "options": [
      "将较少基本机制留在内核，服务通信可能带来开销",
      "把所有服务都放入内核，因此没有通信开销",
      "只适用于没有内存保护的系统",
      "一定比任何宏内核都快"
    ],
    "correct": [
      0
    ],
    "explanation": "微内核有隔离和扩展方面的优势，但用户态服务之间的通信可能增加成本，不能绝对排序性能。",
    "tag": "系统结构",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-m01",
    "chapter": 1,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "下列属于教材所列操作系统基本特征的有？",
    "options": [
      "并发",
      "共享",
      "虚拟",
      "吞吐量"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "基本特征是并发、共享、虚拟、异步。吞吐量是性能指标。",
    "tag": "四个特征",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c1-m02",
    "chapter": 1,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于操作系统与运行环境，下列说法正确的有？",
    "options": [
      "操作系统管理处理机、内存、设备与文件等资源",
      "用户态与内核态有助于限制特权操作",
      "所有库函数调用都会进入内核",
      "一次模式切换不必切换到另一个进程"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "OS 管理资源并提供接口；双重模式限制特权操作。库函数未必需要内核，而模式切换不等于进程切换。",
    "tag": "运行环境",
    "source": "chapters/ch01-introduction.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s01",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "程序与进程的关系，正确的是？",
    "options": [
      "程序是静态描述，进程是一次执行活动",
      "同一程序在任意时刻只能对应一个进程",
      "进程就是磁盘上的可执行文件",
      "没有 PCB 的程序也可被内核作为普通进程调度"
    ],
    "correct": [
      0
    ],
    "explanation": "一个程序可有多个运行实例。进程是动态实体，内核借助 PCB 管理其状态和资源。",
    "tag": "进程实体",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s02",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "一个进程已具备除 CPU 外的一切运行条件，它处于什么状态？",
    "options": [
      "就绪态",
      "阻塞态",
      "终止态",
      "阻塞挂起态"
    ],
    "correct": [
      0
    ],
    "explanation": "就绪进程只等待处理机；阻塞进程还缺少数据、资源或事件条件。",
    "tag": "进程状态",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s03",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "进程等待的磁盘 I/O 完成后，一般先从阻塞态变为什么状态？",
    "options": [
      "就绪态",
      "终止态",
      "创建态",
      "必然直接变为运行态"
    ],
    "correct": [
      0
    ],
    "explanation": "I/O 完成使进程重新具备运行资格，是否马上获得 CPU 还取决于调度。",
    "tag": "进程状态",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s04",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "时间片用完且进程尚未完成，在常规 RR 中它通常发生哪一转换？",
    "options": [
      "运行→就绪",
      "运行→阻塞",
      "就绪→终止",
      "阻塞→运行"
    ],
    "correct": [
      0
    ],
    "explanation": "时间片用完不意味着等待 I/O；进程回就绪队列尾部等待下一轮。",
    "tag": "进程状态",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s05",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "挂起与阻塞的区别，正确的是？",
    "options": [
      "挂起涉及暂停或换出，阻塞涉及等待执行条件",
      "挂起与阻塞完全相同",
      "阻塞进程一定已在外存",
      "挂起进程一定已完成任务"
    ],
    "correct": [
      0
    ],
    "explanation": "挂起和阻塞可组合。就绪挂起仍需激活才能在内存竞争 CPU。",
    "tag": "挂起与阻塞",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s06",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "PCB 最主要的作用是？",
    "options": [
      "记录进程状态、现场和资源等信息，供内核管理",
      "只保存程序源代码",
      "代替所有文件目录",
      "只在进程终止后才创建"
    ],
    "correct": [
      0
    ],
    "explanation": "PCB 是进程管理和现场切换的重要依据，不等于源代码或数据文件。",
    "tag": "PCB",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s07",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "同一进程的多个线程通常各自拥有的是？",
    "options": [
      "程序计数器、寄存器现场和栈",
      "完全独立的进程地址空间",
      "互不相同的全部代码段副本",
      "完全独立的全套进程资源"
    ],
    "correct": [
      0
    ],
    "explanation": "线程共享所属进程的地址空间等资源，但各自保留执行现场与栈。",
    "tag": "线程",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s08",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "在多对一用户级线程模型中，典型限制是？",
    "options": [
      "一个内核实体阻塞可能使同组用户线程都无法运行",
      "每个用户线程都由独立内核线程并行调度",
      "线程切换一定比进程切换更慢",
      "同组线程完全不能共享地址空间"
    ],
    "correct": [
      0
    ],
    "explanation": "多对一映射下内核只看到一个调度实体，阻塞和多核并行能力受其限制。",
    "tag": "线程模型",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s09",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "共享存储方式进行进程通信时，通常还需要什么？",
    "options": [
      "同步与互斥机制",
      "保证所有进程永远同时写同一地址",
      "取消所有访问权限检查",
      "把共享数据改为不可寻址"
    ],
    "correct": [
      0
    ],
    "explanation": "共享存储提供交换数据的区域，但不会自动解决竞态和先后关系。",
    "tag": "进程通信",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-s10",
    "chapter": 2,
    "type": "single",
    "difficulty": "基础",
    "stem": "前趋图中的有向边 A→B 表示？",
    "options": [
      "B 必须在 A 完成后才能执行",
      "A 与 B 必须同刻开始",
      "A 与 B 永远不能运行",
      "B 必须先于 A 完成"
    ],
    "correct": [
      0
    ],
    "explanation": "前趋图描述先后约束，不能把所有节点强行串行，也不能颠倒边的含义。",
    "tag": "前趋关系",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-m01",
    "chapter": 2,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "下列状态转换和原因匹配正确的有？",
    "options": [
      "就绪→运行：获得 CPU",
      "运行→阻塞：等待 I/O",
      "阻塞→就绪：等待事件发生",
      "阻塞→运行：只要时间片到期就直接执行"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "事件完成通常只恢复就绪资格；时间片到期主要触发运行者返回就绪。",
    "tag": "进程状态",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c2-m02",
    "chapter": 2,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于线程模型，下列说法正确的有？",
    "options": [
      "内核支持线程可由内核分别调度",
      "用户级线程的管理可由用户线程库完成",
      "同一进程线程共享所有寄存器现场",
      "共享地址空间不等于可无锁修改同一计数器"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "线程有独立执行现场；共享计数器的读改写仍可能发生竞态。",
    "tag": "线程模型",
    "source": "chapters/ch02-processes-threads.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s01",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "从后备作业中决定接纳谁进入系统，属于哪一级调度？",
    "options": [
      "高级调度",
      "中级调度",
      "低级调度",
      "磁盘调度"
    ],
    "correct": [
      0
    ],
    "explanation": "高级调度负责作业接纳；中级负责换入换出；低级负责分派 CPU。",
    "tag": "三级调度",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s02",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "中级调度主要处理什么问题？",
    "options": [
      "进程的换出与换入",
      "从就绪队列中选择 CPU 获得者",
      "直接确定每次磁盘扇区位置",
      "处理所有系统调用的参数"
    ],
    "correct": [
      0
    ],
    "explanation": "中级调度借助挂起和激活控制内存与多道程序负载。",
    "tag": "三级调度",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s03",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "非抢占 SJF 中，运行中的长进程遇到新到达的短进程时，通常如何处理？",
    "options": [
      "当前进程继续，待调度点再选择就绪者",
      "新短进程必然立即抢占",
      "立即把两者都终止",
      "无条件改用 RR"
    ],
    "correct": [
      0
    ],
    "explanation": "非抢占 SJF 只在调度时从已就绪者中选最短；SRTF 才比较剩余时间进行抢占。",
    "tag": "SJF 与 SRTF",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s04",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "忽略切换开销，RR 的时间片大到足以完成所有就绪进程时，其行为近似？",
    "options": [
      "FCFS",
      "SRTF",
      "EDF",
      "LLF"
    ],
    "correct": [
      0
    ],
    "explanation": "时间片足够大，每个进程轮到时一次运行完，退化为按队列顺序服务。",
    "tag": "时间片轮转",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s05",
    "chapter": 3,
    "type": "single",
    "difficulty": "理解",
    "stem": "进程到达时刻 3、服务时间 4、完成时刻 13，带权周转时间是多少？",
    "options": [
      "2.5",
      "3.25",
      "10",
      "4"
    ],
    "correct": [
      0
    ],
    "explanation": "周转时间=13−3=10；带权周转时间=10/4=2.5。不能用完成时刻直接除服务时间。",
    "tag": "周转时间",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s06",
    "chapter": 3,
    "type": "single",
    "difficulty": "理解",
    "stem": "HRRN 中等待时间为 6、服务时间为 3 的作业，其响应比是多少？",
    "options": [
      "3",
      "2",
      "9",
      "0.5"
    ],
    "correct": [
      0
    ],
    "explanation": "响应比=(等待+服务)/服务=(6+3)/3=3；它不是用户看到的响应时间。",
    "tag": "高响应比优先",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s07",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "动态提高长期等待进程的优先级，主要用于缓解什么问题？",
    "options": [
      "饥饿",
      "所有缺页",
      "内部碎片",
      "设备传输错误"
    ],
    "correct": [
      0
    ],
    "explanation": "老化机制增加长期等待者的机会，但不是解决任意资源死锁的通用办法。",
    "tag": "饥饿与老化",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s08",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "安全状态与死锁的关系，正确的是？",
    "options": [
      "不安全状态不等于当前已经死锁",
      "不安全状态必然已经死锁",
      "安全状态没有任何进程需要资源",
      "只要有进程等待就是死锁"
    ],
    "correct": [
      0
    ],
    "explanation": "安全状态存在满足所有最大需求的完成序列；不安全只是缺少这种保证。",
    "tag": "安全性",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s09",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "银行家算法完成一个模拟进程后，Work 应更新为？",
    "options": [
      "Work + 该进程当前 Allocation",
      "Work + 该进程 Max",
      "Work − 该进程 Need",
      "直接清零"
    ],
    "correct": [
      0
    ],
    "explanation": "模拟获得 Need 后完成并归还全部，净增加量是原来的 Allocation。",
    "tag": "银行家算法",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-s10",
    "chapter": 3,
    "type": "single",
    "difficulty": "基础",
    "stem": "银行家算法收到一个 Request，现有资源足够时应怎样做？",
    "options": [
      "先检查不超 Need，再试分配并做安全性检查",
      "只要各类可用量够就立即永久发放",
      "比较所有资源的总和即可",
      "无需修改 Allocation 或 Need"
    ],
    "correct": [
      0
    ],
    "explanation": "请求既要合法又要当前可满足，仍须试分配检查安全；不安全就回滚并等待。",
    "tag": "银行家算法",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-m01",
    "chapter": 3,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "下列属于死锁必要条件的有？",
    "options": [
      "互斥",
      "请求并保持",
      "不可抢占",
      "进程必须拥有相同优先级"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "四个必要条件是互斥、请求并保持、不可抢占、循环等待；相同优先级不是必要条件。",
    "tag": "死锁条件",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c3-m02",
    "chapter": 3,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于处理机调度，下列说法正确的有？",
    "options": [
      "低级调度通常比高级调度频繁",
      "SRTF 按剩余执行时间选择",
      "实时调度只需最小平均周转时间",
      "优先级数字的大小方向应以题设为准"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "实时系统关心截止时间与可预测性；优先级数字大小没有跨题通用的固定方向。",
    "tag": "调度目标",
    "source": "chapters/ch03-scheduling-deadlock.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s01",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "“两个进程不能同时进入访问同一临界资源的临界区”描述的是？",
    "options": [
      "互斥",
      "时间局部性",
      "文件共享计数",
      "地址重定位"
    ],
    "correct": [
      0
    ],
    "explanation": "互斥控制对临界资源的同时访问；同步还可约束执行先后。",
    "tag": "同步与互斥",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s02",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "记录型信号量 P 操作先减 1 后，何时阻塞当前进程？",
    "options": [
      "结果小于 0",
      "结果小于等于 0",
      "结果大于 0",
      "结果等于 1"
    ],
    "correct": [
      0
    ],
    "explanation": "本库采用教材记录型语义：P 先减，<0 阻塞；不要与 V 的 ≤0 唤醒条件混淆。",
    "tag": "P/V 原语",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s03",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "记录型信号量 V 操作先加 1 后，何时需要唤醒一个等待者？",
    "options": [
      "结果小于等于 0",
      "结果严格小于 0 才唤醒",
      "结果大于 1",
      "结果恒等于初值"
    ],
    "correct": [
      0
    ],
    "explanation": "V 先加，≤0 表示此前仍有等待者，应唤醒一个。",
    "tag": "P/V 原语",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s04",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "容量为 N 的标准有界缓冲区初始为空，empty、full、mutex 的初值分别是？",
    "options": [
      "N，0，1",
      "0，N，1",
      "N，1，0",
      "1，1，N"
    ],
    "correct": [
      0
    ],
    "explanation": "empty 计空槽，full 计可用数据，mutex 保护共享缓冲结构。",
    "tag": "生产者消费者",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s05",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "标准生产者进入临界区前，正确的等待顺序是？",
    "options": [
      "P(empty)，再 P(mutex)",
      "P(mutex)，再 P(empty)",
      "先 V(full)，再 P(empty)",
      "只执行 P(mutex)，无需等空槽"
    ],
    "correct": [
      0
    ],
    "explanation": "先等待资源条件，再持互斥锁；否则可能持锁阻塞，使另一方无法制造所需条件。",
    "tag": "生产者消费者",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s06",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "要保证 B 在 A 完成后执行，done 初值为 0，应采用哪种结构？",
    "options": [
      "A 完成后 V(done)，B 执行前 P(done)",
      "A 执行前 P(done)，B 完成后 V(done)",
      "A、B 都先 P(done)",
      "A、B 都只 V(done)"
    ],
    "correct": [
      0
    ],
    "explanation": "初始零许可迫使 B 等 A 发布完成信号。",
    "tag": "前趋同步",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s07",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "记录型信号量值为 −3，在教材模型中通常表示？",
    "options": [
      "有 3 个进程阻塞在该信号量队列中",
      "有 3 个空闲资源",
      "临界区最多允许 3 个进程同时进入",
      "信号量已经失效"
    ],
    "correct": [
      0
    ],
    "explanation": "在先减后判断的记录型语义下，负值绝对值表示等待者数。",
    "tag": "信号量计数",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s08",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "空缓冲时，消费者先 P(mutex) 再 P(full)，可能造成什么？",
    "options": [
      "持锁等数据，生产者又等锁，形成死锁",
      "自动实现更强公平性",
      "使所有消费者直接进入临界区",
      "只会使缓冲容量翻倍"
    ],
    "correct": [
      0
    ],
    "explanation": "消费者持有 mutex 后在 full 上阻塞，生产者无法进入临界区生产，循环等待。",
    "tag": "P 操作顺序",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s09",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "关于“让权等待”，符合本教材口径的是？",
    "options": [
      "原则上应遵循但非必须，自旋锁可能忙等",
      "所有正确互斥方法都必须释放 CPU 等待",
      "凡不让权的锁必然不能互斥",
      "让权等待就是进程永远不得恢复"
    ],
    "correct": [
      0
    ],
    "explanation": "教材对让权等待有条件说明。忙等会消耗 CPU，但不能单凭它断言互斥必定错误。",
    "tag": "临界区准则",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-s10",
    "chapter": 4,
    "type": "single",
    "difficulty": "基础",
    "stem": "五位哲学家统一按筷子编号从小到大申请，主要破坏了哪个死锁条件？",
    "options": [
      "循环等待",
      "互斥",
      "所有资源不可共享",
      "存在临界区"
    ],
    "correct": [
      0
    ],
    "explanation": "对资源施加统一全序可防止等待环；不等于自动保证每个哲学家有限等待。",
    "tag": "哲学家问题",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-m01",
    "chapter": 4,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "标准有界缓冲区的设计中，下列说法正确的有？",
    "options": [
      "空槽与数据分别计数",
      "共享结构的修改需要互斥保护",
      "应先持有 mutex 再等 empty 或 full",
      "资源条件的 P 通常位于互斥 P 之前"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "分别表达容量、数据和结构互斥；先持锁再等资源可能阻止对方改变条件。",
    "tag": "生产者消费者",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c4-m02",
    "chapter": 4,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于同步机制，下列说法正确的有？",
    "options": [
      "P/V 原语需要保证原子性",
      "条件变量与能累计许可的信号量完全相同",
      "多核只关本核中断不能阻止另一核访问共享数据",
      "互斥正确并不自动保证不会饥饿"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explanation": "条件变量的等待通知语义不同于累计许可的信号量；互斥、公平和多核可见性应分别分析。",
    "tag": "同步机制",
    "source": "chapters/ch04-synchronization.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s01",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "固定分区分配中，分区内未被作业利用的空间属于？",
    "options": [
      "内部碎片",
      "外部碎片",
      "页表命中",
      "磁盘缓存"
    ],
    "correct": [
      0
    ],
    "explanation": "分配给作业的分区内部余量为内部碎片；分配区域之间的零散空闲区为外部碎片。",
    "tag": "内外碎片",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s02",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "动态分区中的最佳适应算法 BF 应选择？",
    "options": [
      "足够容纳请求的最小空闲分区",
      "地址最低的任意空闲分区",
      "当前最大的空闲分区",
      "最近被释放的分区，无论大小"
    ],
    "correct": [
      0
    ],
    "explanation": "BF 在够大的分区中选最小者；WF 选最大，FF 按地址等既定顺序找首个够用的分区。",
    "tag": "分区分配",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s03",
    "chapter": 5,
    "type": "single",
    "difficulty": "理解",
    "stem": "地址从小到大的空闲块为 100、500、200、300、600，申请 212，首次适应算法选择？",
    "options": [
      "500 的空闲块",
      "100 的空闲块",
      "300 的空闲块",
      "600 的空闲块"
    ],
    "correct": [
      0
    ],
    "explanation": "FF 按顺序搜索，第一个够大的空闲块是 500。BF 才会选 300。",
    "tag": "分区分配",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s04",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "分页存储管理的一般碎片特点是？",
    "options": [
      "没有外部碎片，末页可能有内部碎片",
      "只存在外部碎片",
      "任何情况下都没有碎片",
      "页越大就必然越没有内部碎片"
    ],
    "correct": [
      0
    ],
    "explanation": "固定长度页框支持离散分配，但末页不满仍可能浪费空间。",
    "tag": "分页管理",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s05",
    "chapter": 5,
    "type": "single",
    "difficulty": "理解",
    "stem": "页大小为 1024 字节，逻辑地址 2500 的页号和页内偏移是？",
    "options": [
      "页号 2，偏移 452",
      "页号 2，偏移 500",
      "页号 3，偏移 452",
      "页号 1，偏移 1476"
    ],
    "correct": [
      0
    ],
    "explanation": "页号=floor(2500/1024)=2，偏移=2500−2048=452。",
    "tag": "地址转换",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s06",
    "chapter": 5,
    "type": "single",
    "difficulty": "理解",
    "stem": "页大小为 1024 字节，页号 2 映射到页框 5，页内偏移 100 的物理地址是？",
    "options": [
      "5220",
      "2148",
      "5120",
      "6244"
    ],
    "correct": [
      0
    ],
    "explanation": "物理地址=页框号×页大小+偏移=5×1024+100=5220。",
    "tag": "地址转换",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s07",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "TLB 未命中说明什么？",
    "options": [
      "需要查页表，所需页面仍可能驻留内存",
      "必然发生缺页",
      "虚拟地址一定越界",
      "进程必然已终止"
    ],
    "correct": [
      0
    ],
    "explanation": "TLB 只是页表项缓存，缓存没有该项不代表页面不在内存。",
    "tag": "TLB",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s08",
    "chapter": 5,
    "type": "single",
    "difficulty": "理解",
    "stem": "单级页表、串行查 TLB、不计更新、无缺页。TLB 10ns，访存 100ns，命中率 80%，EAT 是？",
    "options": [
      "130ns",
      "110ns",
      "120ns",
      "210ns"
    ],
    "correct": [
      0
    ],
    "explanation": "命中110ns，未命中210ns。0.8×110+0.2×210=130ns。",
    "tag": "TLB EAT",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s09",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "分段管理相比纯分页，更直接对应什么？",
    "options": [
      "程序的逻辑语义单元",
      "所有段必须具有同样大小",
      "每段必然只占一个页框",
      "自动消除所有外部碎片"
    ],
    "correct": [
      0
    ],
    "explanation": "段通常按代码、数据等逻辑单元组织，段长可不同，段内连续可能形成外部碎片。",
    "tag": "分段管理",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-s10",
    "chapter": 5,
    "type": "single",
    "difficulty": "基础",
    "stem": "装入与链接的区别，正确的是？",
    "options": [
      "链接解决模块引用，装入使程序进入内存运行环境",
      "链接就是页面置换",
      "装入只处理函数名，从不涉及内存位置",
      "二者完全同义"
    ],
    "correct": [
      0
    ],
    "explanation": "链接连接模块及库；装入安排程序进入内存，并按方案处理地址绑定或重定位。",
    "tag": "装入链接",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-m01",
    "chapter": 5,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于地址转换，下列说法正确的有？",
    "options": [
      "物理地址由页框号和页内偏移组成",
      "TLB 未命中等同于缺页",
      "合法但未驻留与访问越界是不同情况",
      "动态重定位可借助硬件在访问时完成"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explanation": "必须分别检查合法性、驻留与权限；TLB 未命中还要查主存页表。",
    "tag": "地址转换",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c5-m02",
    "chapter": 5,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "下列关于存储管理的说法正确的有？",
    "options": [
      "分页使用等长页和页框",
      "分段可按逻辑单元设置保护",
      "覆盖与请求分页完全同义",
      "动态分区回收时应考虑合并相邻空闲区"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "覆盖按程序结构复用区域，请求分页则按访问需求调入页面，机制不同。",
    "tag": "分配方式",
    "source": "chapters/ch05-memory-management.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s01",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "近期访问过的数据很可能再次被访问，体现了什么？",
    "options": [
      "时间局部性",
      "空间局部性",
      "循环等待",
      "物理连续性"
    ],
    "correct": [
      0
    ],
    "explanation": "时间局部性关注近期再用；空间局部性关注相邻地址。",
    "tag": "局部性",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s02",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "合法页面不在内存时访问它，通常触发？",
    "options": [
      "缺页异常",
      "必然越界终止",
      "普通时间片到期",
      "文件关闭"
    ],
    "correct": [
      0
    ],
    "explanation": "合法但不驻留触发缺页处理，越界和权限错误是不同情况。",
    "tag": "缺页处理",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s03",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "选择被淘汰页时，哪一页通常需要额外写回外存？",
    "options": [
      "修改位为 1 的脏页",
      "只要访问位为 1 就一定写回",
      "所有只读干净页都必须写回",
      "页号最小的页"
    ],
    "correct": [
      0
    ],
    "explanation": "修改位表明数据相对外存副本已更改，通常需写回以免丢失修改。",
    "tag": "修改位",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s04",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "OPT 页面置换的选择规则是？",
    "options": [
      "淘汰未来最久不再使用的页",
      "淘汰过去最早装入的页",
      "淘汰过去最长时间未访问的页",
      "淘汰当前页号最大的页"
    ],
    "correct": [
      0
    ],
    "explanation": "OPT 依赖未来引用信息，常用于作为性能比较基准。LRU 看过去，FIFO 看装入顺序。",
    "tag": "页面置换",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s05",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "LRU 页面置换主要依据？",
    "options": [
      "过去最长时间未被访问",
      "未来最久才使用",
      "装入最早且忽略后续访问",
      "页号从小到大"
    ],
    "correct": [
      0
    ],
    "explanation": "LRU 维护最近使用历史，命中也会更新近期使用状态。",
    "tag": "页面置换",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s06",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "增加页框后缺页次数反而可能增加的 Belady 异常，经典发生于？",
    "options": [
      "FIFO",
      "OPT",
      "LRU",
      "所有算法都必然发生"
    ],
    "correct": [
      0
    ],
    "explanation": "FIFO 可能发生 Belady 异常；OPT 与 LRU 具有栈性质，不会出现该异常。",
    "tag": "Belady 异常",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s07",
    "chapter": 6,
    "type": "single",
    "difficulty": "理解",
    "stem": "3 个页框初始空，LRU 访问 1,2,1,3,1,2，共缺页多少次？",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correct": [
      0
    ],
    "explanation": "首次访问 1、2、3 各缺页一次，三个页均能驻留，之后全命中。",
    "tag": "缺页率",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s08",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "页框初始已预装部分页面，计算给定引用串的缺页率时应如何处理预装？",
    "options": [
      "预装不计入引用串中的缺页次数",
      "所有预装都补算成串内缺页",
      "忽略预装并将页框重置为空",
      "分母只统计发生缺页的访问"
    ],
    "correct": [
      0
    ],
    "explanation": "分母是题给访问次数；初始驻留状态直接用于第一次访问判断。",
    "tag": "初始页框",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s09",
    "chapter": 6,
    "type": "single",
    "difficulty": "理解",
    "stem": "TLB 命中 80%，未命中中有 10% 发生缺页，总缺页率是多少？",
    "options": [
      "2%",
      "10%",
      "20%",
      "8%"
    ],
    "correct": [
      0
    ],
    "explanation": "总体概率=(1−0.8)×0.1=0.02，条件概率不能直接当总体概率。",
    "tag": "条件概率",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-s10",
    "chapter": 6,
    "type": "single",
    "difficulty": "基础",
    "stem": "频繁缺页导致进程主要忙于换页、CPU 利用率下降，这种现象是？",
    "options": [
      "抖动",
      "磁盘预读",
      "内存压缩必然成功",
      "时间片轮转"
    ],
    "correct": [
      0
    ],
    "explanation": "抖动常与驻留页框不足、工作集需求和多道负载相关，盲目提高并发可能恶化。",
    "tag": "工作集与抖动",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-m01",
    "chapter": 6,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "缺页置换的处理过程中，通常需要考虑哪些操作？",
    "options": [
      "按算法选择受害页",
      "脏页必要时写回",
      "让被淘汰页的旧 TLB 映射失效",
      "淘汰页后仍永久保留其有效 TLB 项"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "页表与 TLB 必须保持映射一致，否则可能使用失效物理映射。",
    "tag": "缺页处理",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c6-m02",
    "chapter": 6,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于虚拟存储器与置换，下列说法正确的有？",
    "options": [
      "逻辑空间不必全部驻留主存",
      "固定分配局部置换只在本进程驻留页中淘汰",
      "FIFO 命中必然把该页移到装入队尾",
      "工作集反映某一时间窗口内的活跃页面"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "FIFO 按装入顺序淘汰，命中不改变装入队列；LRU 则更新最近使用顺序。",
    "tag": "置换策略",
    "source": "chapters/ch06-virtual-memory.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s01",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "将通用 I/O 请求转为具体设备命令、设置设备寄存器，主要属于哪层？",
    "options": [
      "设备驱动程序",
      "用户层格式转换",
      "文件逻辑结构",
      "作业高级调度"
    ],
    "correct": [
      0
    ],
    "explanation": "设备驱动负责设备相关的命令、参数和启动控制。",
    "tag": "I/O 软件层次",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s02",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "设备权限检查、统一命名和通用缓冲管理，主要属于哪层？",
    "options": [
      "与设备无关的 I/O 软件",
      "纯硬件磁头",
      "用户应用源代码翻译",
      "CPU 指令译码器"
    ],
    "correct": [
      0
    ],
    "explanation": "设备无关层提供统一接口、保护、设备分配和通用缓冲等功能。",
    "tag": "I/O 软件层次",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s03",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "中断驱动 I/O 与轮询相比，主要减少了什么？",
    "options": [
      "CPU 反复检查设备状态的等待",
      "所有数据传送所需时间",
      "任何形式的 CPU 参与",
      "所有设备控制器的需求"
    ],
    "correct": [
      0
    ],
    "explanation": "中断通知使 CPU 不必持续轮询，但传统中断驱动的数据搬运仍可能由 CPU 完成。",
    "tag": "I/O 控制方式",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s04",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "DMA 的典型特点是？",
    "options": [
      "控制器成块搬运数据，CPU 初始化并处理完成或异常",
      "每字节都必须由 CPU 执行搬运指令",
      "CPU 无需进行任何初始化",
      "与中断机制完全互斥，不能合用"
    ],
    "correct": [
      0
    ],
    "explanation": "DMA 减少 CPU 对成块数据传送的逐字节干预，但仍需设置和结束处理。",
    "tag": "DMA",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s05",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "SPOOLing 使独占打印机实现逻辑共享，依靠什么？",
    "options": [
      "输出井与后台服务对任务排队输出",
      "使打印机同时物理打印两份文档",
      "取消磁盘和缓冲区",
      "把所有打印操作改为 CPU 计算"
    ],
    "correct": [
      0
    ],
    "explanation": "假脱机把任务先存入输出井，再由后台逐个输出，实现逻辑共享而非物理同刻打印。",
    "tag": "SPOOLing",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s06",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "缓冲与缓存的主要出发点，匹配正确的是？",
    "options": [
      "缓冲协调速度和时序差，缓存利用重复访问",
      "缓冲只保护密码，缓存只分配 CPU",
      "缓冲完全不能提高 I/O 重叠",
      "缓存必然保存所有外存数据"
    ],
    "correct": [
      0
    ],
    "explanation": "二者主要目的不同，但具体机制可能兼具缓冲和缓存作用。",
    "tag": "缓冲与缓存",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s07",
    "chapter": 7,
    "type": "single",
    "difficulty": "理解",
    "stem": "机械磁盘转速 6000 r/min，平均旋转等待约是多少？",
    "options": [
      "5ms",
      "10ms",
      "0.1ms",
      "60ms"
    ],
    "correct": [
      0
    ],
    "explanation": "每圈=60/6000秒=10ms，平均旋转延迟取半圈=5ms。",
    "tag": "磁盘访问时间",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s08",
    "chapter": 7,
    "type": "single",
    "difficulty": "理解",
    "stem": "寻道 6ms，平均旋转 3ms，传输 0.2ms，控制器 0.2ms，不计排队，平均访问时间是？",
    "options": [
      "9.4ms",
      "9ms",
      "6.4ms",
      "3.4ms"
    ],
    "correct": [
      0
    ],
    "explanation": "将题设四部分相加：6+3+0.2+0.2=9.4ms；排队时间本题未计。",
    "tag": "磁盘访问时间",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s09",
    "chapter": 7,
    "type": "single",
    "difficulty": "基础",
    "stem": "SSTF 磁盘调度的一般风险是？",
    "options": [
      "远处请求可能长期等待",
      "必须先走到磁道端点",
      "每次都优先服务最早请求",
      "一定达到全局最小总移动"
    ],
    "correct": [
      0
    ],
    "explanation": "SSTF 每步选最近请求，可能让远处请求饥饿，也不保证全序列最优。",
    "tag": "磁盘调度",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-s10",
    "chapter": 7,
    "type": "single",
    "difficulty": "理解",
    "stem": "T=100、M=5、C=90，按教材单缓冲稳态模型，每块周期是？",
    "options": [
      "105",
      "195",
      "100",
      "90"
    ],
    "correct": [
      0
    ],
    "explanation": "单缓冲稳态周期=max(T,C)+M=100+5=105。有限块总时间还需计启动与排空。",
    "tag": "缓冲计算",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-m01",
    "chapter": 7,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于 I/O 系统，下列说法正确的有？",
    "options": [
      "DMA 仍需 CPU 进行初始化和结束处理",
      "SPOOLing 不消除物理打印耗时",
      "中断完成会使所有等待者必然立即运行",
      "设备分配可能涉及设备、控制器、通道多种资源"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "被唤醒者先取得就绪资格，能否立即运行由调度决定。",
    "tag": "I/O 综合",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c7-m02",
    "chapter": 7,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于磁盘与缓冲计算，下列说法正确的有？",
    "options": [
      "平均旋转等待通常按半圈计算",
      "读一块的时间与稳态每块周期不能随意等同",
      "SCAN 的端点或最远请求折返口径应由题设说明",
      "一次磁盘访问时间就是所有访存的 EAT"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "EAT 按访存分支概率加权；磁盘时间可能只作为缺页分支成本，不能直接等同。",
    "tag": "时间模型",
    "source": "chapters/ch07-io.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s01",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "文件的逻辑结构描述什么？",
    "options": [
      "用户看到的字节流或记录组织",
      "磁头当前所在磁道",
      "数据块必然连续的物理布局",
      "CPU 的就绪队列"
    ],
    "correct": [
      0
    ],
    "explanation": "逻辑结构与物理块分配属于不同层面。按名存取不保证物理连续。",
    "tag": "逻辑结构",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s02",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "FCB 的主要作用是？",
    "options": [
      "保存文件属性与控制信息",
      "保存 CPU 算术流水线",
      "代替所有磁盘数据块",
      "决定处理机时间片长度"
    ],
    "correct": [
      0
    ],
    "explanation": "文件控制块包含管理文件所需的属性和控制信息，索引节点是相关组织形式。",
    "tag": "文件元数据",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s03",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "索引节点方案中，目录项通常通过什么定位文件元数据？",
    "options": [
      "文件名对应的索引节点标识",
      "当前 CPU 温度",
      "进程时间片余额",
      "文件最后一次打印的页数"
    ],
    "correct": [
      0
    ],
    "explanation": "索引节点将大量元数据从目录项中分出，目录按名称关联到节点。",
    "tag": "目录与节点",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s04",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "绝对路径与相对路径的区别是？",
    "options": [
      "前者从根解释，后者从当前目录解释",
      "前者只用于小文件，后者只用于大文件",
      "二者永远指向同一个文件",
      "相对路径与工作目录无关"
    ],
    "correct": [
      0
    ],
    "explanation": "相同相对路径字符串在不同工作目录可指不同对象。",
    "tag": "路径",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s05",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "同一文件已有两个硬链接，删除其中一个目录项后通常怎样？",
    "options": [
      "另一个名字仍可访问同一文件",
      "所有名字立即失效",
      "文件必然立即从磁盘擦除",
      "链接计数自动增至 3"
    ],
    "correct": [
      0
    ],
    "explanation": "硬链接共享同一索引节点，删除一个名字减少链接计数，不能直接推出数据立即回收。",
    "tag": "文件共享",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s06",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "符号链接通常保存的是什么？",
    "options": [
      "目标路径",
      "目标文件全部数据的强制副本",
      "目标当前内存物理地址",
      "磁盘所有空闲块清单"
    ],
    "correct": [
      0
    ],
    "explanation": "符号链接按保存的路径解析目标，删除目标名可能使其悬挂。",
    "tag": "文件共享",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s07",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "打开文件操作通常意味着？",
    "options": [
      "建立或引用相应的打开文件状态",
      "必然把整个文件装入内存",
      "创建一份完全相同的新文件",
      "立即删除目录项"
    ],
    "correct": [
      0
    ],
    "explanation": "打开建立运行时访问状态，不保证整份文件都驻留内存。",
    "tag": "打开与关闭",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s08",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "访问控制表 ACL 通常按什么组织权限？",
    "options": [
      "按对象列出可访问它的主体或域及权限",
      "按 CPU 时钟周期列出指令",
      "只按磁道大小组织",
      "按页面装入顺序组织"
    ],
    "correct": [
      0
    ],
    "explanation": "访问矩阵可按列组织为 ACL，按域组织为权能表。",
    "tag": "访问控制",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s09",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "权能表通常按什么组织？",
    "options": [
      "按保护域列出可访问对象及许可",
      "按文件数据块的旋转顺序",
      "按所有用户的口令明文",
      "按页面缺页次数"
    ],
    "correct": [
      0
    ],
    "explanation": "ACL 偏对象侧，权能表偏域侧，都是访问矩阵的不同组织方式。",
    "tag": "访问控制",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-s10",
    "chapter": 8,
    "type": "single",
    "difficulty": "基础",
    "stem": "VFS 的主要作用是？",
    "options": [
      "为多种底层文件系统提供统一操作接口",
      "保证所有文件采用相同磁盘格式",
      "取消权限和路径解析",
      "让所有文件都变为连续分配"
    ],
    "correct": [
      0
    ],
    "explanation": "统一接口不等于底层格式完全相同。",
    "tag": "虚拟文件系统",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-m01",
    "chapter": 8,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于文件与目录，下列说法正确的有？",
    "options": [
      "逻辑结构不等于物理块分配",
      "同一相对路径在不同目录可指不同文件",
      "打开文件必然把全部内容加载到内存",
      "树形目录支持层次命名"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "打开文件主要建立访问状态；实际数据可按需读取。",
    "tag": "目录结构",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c8-m02",
    "chapter": 8,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于文件共享和保护，下列说法正确的有？",
    "options": [
      "硬链接可共享同一索引节点",
      "符号链接的目标路径失效后可能悬挂",
      "认证成功意味着对全部文件有读写权",
      "删除名字与回收数据是不同动作"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "认证解决身份，授权决定可执行的操作。数据回收还要考虑链接及打开引用等规则。",
    "tag": "共享与保护",
    "source": "chapters/ch08-files.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s01",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "连续分配方式中，定位文件块通常只需哪些基本信息？",
    "options": [
      "起始块号和长度",
      "每个块的随机密钥",
      "所有进程的 PCB",
      "只有文件名，不需元数据"
    ],
    "correct": [
      0
    ],
    "explanation": "连续布局可用起点与长度定位，但增长和外部碎片是代价。",
    "tag": "外存分配",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s02",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "链接分配相比连续分配，典型特点是？",
    "options": [
      "增长较灵活，但随机定位代价较高",
      "必须一次分配整个磁盘",
      "每个文件永远只能有一个块",
      "无需保存任何后继信息"
    ],
    "correct": [
      0
    ],
    "explanation": "链接组织沿后继访问，支持非连续增长，随机访问需追踪链接。",
    "tag": "外存分配",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s03",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "FAT 的主要用途是？",
    "options": [
      "集中记录文件块的后继关系",
      "统计所有进程的优先级",
      "代替 TLB",
      "记录每次 CPU 中断现场"
    ],
    "correct": [
      0
    ],
    "explanation": "FAT 将链接关系集中于表中，仍属链接组织思路。",
    "tag": "FAT",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s04",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "索引分配方式的典型代价是？",
    "options": [
      "索引块本身占用存储空间",
      "完全不支持随机访问",
      "文件永远无法增长",
      "所有块必须连续"
    ],
    "correct": [
      0
    ],
    "explanation": "索引以额外索引空间换取灵活定位，多级索引还需额外读索引的成本。",
    "tag": "索引分配",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s05",
    "chapter": 9,
    "type": "single",
    "difficulty": "理解",
    "stem": "数据块 4096B，块号指针 4B，一个一级索引块最多指向多少数据字节？",
    "options": [
      "4194304B",
      "4096B",
      "1024B",
      "16777216B"
    ],
    "correct": [
      0
    ],
    "explanation": "指针数=4096/4=1024，数据容量=1024×4096=4194304B，即4MiB，不含索引块自身。",
    "tag": "索引容量",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s06",
    "chapter": 9,
    "type": "single",
    "difficulty": "理解",
    "stem": "管理 1000 个磁盘块的位示图，至少需要多少字节？",
    "options": [
      "125",
      "1000",
      "128",
      "8000"
    ],
    "correct": [
      0
    ],
    "explanation": "每块一位，所需字节=ceil(1000/8)=125。",
    "tag": "位示图",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s07",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "RAID 0 的主要特点是？",
    "options": [
      "条带化但无冗余",
      "每份数据至少有一份镜像",
      "能自动恢复任意数量磁盘故障",
      "等同于异地离线备份"
    ],
    "correct": [
      0
    ],
    "explanation": "RAID 0 提供条带并行，不提供冗余；不能把它当作容错或备份。",
    "tag": "RAID",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s08",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "RAID 1 的核心机制是？",
    "options": [
      "镜像",
      "只做条带且不重复数据",
      "只提高 CPU 主频",
      "取消磁盘写入"
    ],
    "correct": [
      0
    ],
    "explanation": "RAID 1 使用镜像提高冗余，仍不能替代针对误删等风险的备份。",
    "tag": "RAID",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s09",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "将相邻块提前读入缓存，主要利用？",
    "options": [
      "空间局部性",
      "循环等待",
      "用户态特权",
      "进程挂起"
    ],
    "correct": [
      0
    ],
    "explanation": "预读利用邻近块可能很快被访问的特征，效果仍取决于访问模式。",
    "tag": "磁盘提速",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-s10",
    "chapter": 9,
    "type": "single",
    "difficulty": "基础",
    "stem": "日志与检查点等恢复机制主要服务于？",
    "options": [
      "故障后的数据一致性与恢复",
      "确保任何请求都无寻道时间",
      "让所有文件不再需要权限",
      "彻底消除一切硬件故障"
    ],
    "correct": [
      0
    ],
    "explanation": "日志、检查点和事务恢复围绕状态一致性，不能替代所有硬件容错。",
    "tag": "一致性",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-m01",
    "chapter": 9,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于外存组织，下列说法正确的有？",
    "options": [
      "连续分配有利于顺序传输但增长不灵活",
      "索引分配需要保存数据块号",
      "链接分配随机访问必然比任何索引更快",
      "位示图以每块一位记录状态"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "链接随机访问常需追踪多个后继，不能绝对判定更快。",
    "tag": "外存管理",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c9-m02",
    "chapter": 9,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于可靠性和性能，下列说法正确的有？",
    "options": [
      "冗余不等于独立备份",
      "写回缓存需考虑断电丢失风险",
      "RAID 0 可容忍任一成员盘损坏且无损恢复",
      "预读与合并写可减少部分实际 I/O"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "RAID 0 无冗余；镜像或校验也不能处理所有逻辑破坏与误删除风险。",
    "tag": "可靠性",
    "source": "chapters/ch09-disk-storage.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s01",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "NUMA 的关键特点是？",
    "options": [
      "不同节点内存的访问成本不同",
      "所有内存访问时延绝对相同",
      "每个处理机都不能访问其他节点数据",
      "内存只在磁盘中存在"
    ],
    "correct": [
      0
    ],
    "explanation": "NUMA 的远近节点访问成本不同，数据放置与线程亲和性会影响性能。",
    "tag": "UMA 与 NUMA",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s02",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "UMA 主要强调什么？",
    "options": [
      "共享内存访问成本基本统一",
      "每个进程拥有无限内存",
      "无需任何同步",
      "所有处理机必须运行不同操作系统"
    ],
    "correct": [
      0
    ],
    "explanation": "UMA 指统一内存访问模型，不意味着不存在总线或内存争用。",
    "tag": "UMA 与 NUMA",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s03",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "主从式多处理机操作系统的典型风险是？",
    "options": [
      "主处理机可能形成管理瓶颈",
      "任何处理机都不能运行内核",
      "从处理机必然永远空闲",
      "没有单点管理因素"
    ],
    "correct": [
      0
    ],
    "explanation": "集中由主 CPU 管理较易实现，但主处理机易成为瓶颈或故障点。",
    "tag": "系统结构",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s04",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "对称式多处理机系统仍需重点解决？",
    "options": [
      "内核共享状态的并发同步",
      "所有处理机必须轮流开机",
      "禁止多个 CPU 参与管理",
      "彻底取消内存共享"
    ],
    "correct": [
      0
    ],
    "explanation": "处理机较对等地参与运行，意味着共享内核数据需正确同步。",
    "tag": "系统结构",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s05",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "自旋锁较适合的典型场景是？",
    "options": [
      "临界区很短，持锁者可在另一 CPU 继续推进",
      "预期等待很长且持锁者无法运行",
      "单核中持锁者永久阻塞",
      "任意长 I/O 都应持锁忙等"
    ],
    "correct": [
      0
    ],
    "explanation": "短等待可能少于阻塞唤醒开销；长等待则浪费 CPU 和互连。",
    "tag": "自旋锁",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s06",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "RCU 中发布新版本后，旧数据何时可回收？",
    "options": [
      "确认原有读者不再可能引用它之后",
      "发布新指针的同一瞬间无条件释放",
      "任何新读者进入之前立即释放",
      "永远不允许回收"
    ],
    "correct": [
      0
    ],
    "explanation": "RCU 需要等待适当宽限期，不能只替换指针就释放仍可能被读者使用的旧对象。",
    "tag": "RCU",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s07",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "成组调度的主要思路是？",
    "options": [
      "让合作线程作为一组同时得到处理机",
      "按磁盘块号给 CPU 排序",
      "所有进程只能使用一颗 CPU",
      "只接纳最大作业"
    ],
    "correct": [
      0
    ],
    "explanation": "合作线程同时推进有助于减少彼此等待未被调度的伙伴。",
    "tag": "多处理机调度",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s08",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "处理机亲和性主要考虑什么？",
    "options": [
      "线程继续使用相关 CPU 与局部数据以减少迁移成本",
      "根据 CPU 外观颜色分配任务",
      "保证每个线程永不抢占",
      "让所有线程频繁随机迁移"
    ],
    "correct": [
      0
    ],
    "explanation": "缓存与 NUMA 局部性使位置影响性能；负载平衡需与迁移成本权衡。",
    "tag": "亲和性",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s09",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "增加 CPU 数量后，性能未必同比提升，原因可能是？",
    "options": [
      "串行部分、同步和共享争用开销",
      "所有程序都能自动无限并行",
      "线程数一定随 CPU 数减少为零",
      "物理内存必然变为无限"
    ],
    "correct": [
      0
    ],
    "explanation": "并行硬件并不消除串行工作、同步等待和资源争用。",
    "tag": "并行开销",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-s10",
    "chapter": 10,
    "type": "single",
    "difficulty": "基础",
    "stem": "多个 CPU 争同一锁时，队列锁或退避机制通常用于？",
    "options": [
      "减少密集竞争重试或有序安排等待者",
      "让两个持锁者无条件同时进入",
      "自动扩大所有临界区",
      "取消全部原子操作需求"
    ],
    "correct": [
      0
    ],
    "explanation": "它们优化等待与竞争成本，正确性仍依赖相应协议与原子机制。",
    "tag": "锁竞争",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-m01",
    "chapter": 10,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于多处理机同步，下列说法正确的有？",
    "options": [
      "关本核中断不能阻止另一 CPU 访问共享数据",
      "自旋等待时间过长会浪费 CPU",
      "RCU 发布新版本后可无条件立即释放旧版本",
      "令牌机制可用持有唯一令牌授予进入资格"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "RCU 要确认旧读者安全退出；令牌协议还要处理丢失与故障。",
    "tag": "多核同步",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c10-m02",
    "chapter": 10,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于多处理机调度，下列说法正确的有？",
    "options": [
      "公共就绪队列可供空闲 CPU 自行取任务",
      "专用处理机分配可能使等待 I/O 的 CPU 闲置",
      "线程迁移无需任何缓存或数据位置代价",
      "成组调度适用于紧密协作线程"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "调度既看数量也看位置，迁移可能增加缓存未命中和远程内存成本。",
    "tag": "多核调度",
    "source": "chapters/ch10-multiprocessor.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s01",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "VMM / Hypervisor 的主要作用是？",
    "options": [
      "管理虚拟机并复用和隔离物理资源",
      "代替每个应用编写业务代码",
      "保证客户机永久独占所有硬件",
      "只是一个文件压缩工具"
    ],
    "correct": [
      0
    ],
    "explanation": "VMM 在客户系统与物理资源之间实施虚拟化与管理。",
    "tag": "虚拟化",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s02",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "Type 1 与 Type 2 虚拟机监控器的典型区别是？",
    "options": [
      "前者直接运行于硬件层，后者依托宿主操作系统",
      "前者不能运行客户机，后者只能一个客户机",
      "前者只虚拟内存，后者只虚拟 CPU",
      "二者与宿主系统关系完全相同"
    ],
    "correct": [
      0
    ],
    "explanation": "分类关注监控器与硬件/宿主操作系统的层次关系。",
    "tag": "监控器类型",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s03",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "虚拟机中的“客户物理地址”通常是什么？",
    "options": [
      "仍可能需映射到最终机器物理地址的中间地址",
      "永远与主机物理地址逐位相同",
      "磁盘文件名",
      "只有用户态可用的函数指针"
    ],
    "correct": [
      0
    ],
    "explanation": "客户虚拟→客户物理→机器物理是虚拟化访存的重要层次。",
    "tag": "内存虚拟化",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s04",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "一台 8 核主机给两台客户机各配 8 vCPU，能否仅凭配置保证二者持续各得 8 核算力？",
    "options": [
      "不能，仍受物理资源与调度共享约束",
      "能，因为 vCPU 会制造新物理核心",
      "能，因为两台客户机总能忽略对方",
      "不能，因为虚拟机完全不能并行"
    ],
    "correct": [
      0
    ],
    "explanation": "vCPU 是调度抽象，数量不等于任意时刻独占的物理核心数。",
    "tag": "vCPU",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s05",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "租用基础计算、存储和网络资源，主要属于？",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "仅本地单用户批处理"
    ],
    "correct": [
      0
    ],
    "explanation": "IaaS 提供基础资源，使用者可在其上管理较多系统软件。",
    "tag": "云服务层次",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s06",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "提供应用运行与部署平台，让开发者主要部署应用，属于？",
    "options": [
      "PaaS",
      "IaaS",
      "SaaS",
      "裸磁盘寻道服务"
    ],
    "correct": [
      0
    ],
    "explanation": "PaaS 侧重应用运行环境与部署平台，不等同于只租用虚拟机。",
    "tag": "云服务层次",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s07",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "直接提供完整应用供用户使用，通常属于？",
    "options": [
      "SaaS",
      "IaaS",
      "指令集虚拟化",
      "物理块分配"
    ],
    "correct": [
      0
    ],
    "explanation": "SaaS 提供完成的应用服务，用户一般无需管理其底层操作系统。",
    "tag": "云服务层次",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s08",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "以下哪项是教材列出的云计算特征？",
    "options": [
      "服务可计量",
      "所有资源必须永久独占",
      "只能人工线下扩容",
      "用户必须管理全部物理服务器"
    ],
    "correct": [
      0
    ],
    "explanation": "五特征包括按需自助、网络访问、共享资源池、快速弹性、可计量。",
    "tag": "云的特征",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s09",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "虚拟机在线迁移要保持运行状态，通常需要？",
    "options": [
      "协调内存等运行状态的传输与最终切换",
      "只改虚拟机显示名称",
      "只复制磁盘而不考虑内存和设备状态",
      "无条件让源目标同时任意写同一内存"
    ],
    "correct": [
      0
    ],
    "explanation": "运行状态迁移比复制静态磁盘复杂，需要协调执行和状态一致性。",
    "tag": "虚拟机迁移",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-s10",
    "chapter": 11,
    "type": "single",
    "difficulty": "基础",
    "stem": "关于教材所述早期架构虚拟化限制，合理的理解是？",
    "options": [
      "应结合所述架构与年代分析，不能外推为所有后续实现都不可能",
      "由此证明所有 x86 永远不能虚拟化",
      "现代硬件也绝不提供辅助机制",
      "任何客户指令都无需处理即可安全直接执行"
    ],
    "correct": [
      0
    ],
    "explanation": "教材历史实例用于理解机制，不能作为当前所有架构能力的绝对结论。",
    "tag": "实现边界",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-m01",
    "chapter": 11,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "教材列出的云计算特征包括？",
    "options": [
      "按需自助服务",
      "共享资源池",
      "快速弹性",
      "资源永远不能计量"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "另外还有广泛网络访问和服务可计量；固定不可计量与教材描述不符。",
    "tag": "云的特征",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c11-m02",
    "chapter": 11,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于虚拟化，下列说法正确的有？",
    "options": [
      "vCPU 数不代表持续独占等量物理核心",
      "客户物理地址可能仍需二次映射",
      "虚拟机与虚拟存储器是完全同一概念",
      "I/O 虚拟化需权衡兼容、性能与隔离"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "虚拟机是机器环境抽象，虚拟存储器是地址空间与驻留抽象，层次不同。",
    "tag": "虚拟化综合",
    "source": "chapters/ch11-virtualization-cloud.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s01",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "未经许可读取他人私有数据，首先破坏哪个安全目标？",
    "options": [
      "机密性",
      "仅可用性",
      "进程公平性",
      "磁盘连续性"
    ],
    "correct": [
      0
    ],
    "explanation": "机密性保护信息免于未授权披露；完整性关注篡改，可用性关注服务可用。",
    "tag": "安全目标",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s02",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "用户验证与授权的区别是？",
    "options": [
      "验证回答你是谁，授权回答你能做什么",
      "验证成功就自动获得全部权限",
      "二者只在磁盘调度中使用",
      "授权只检查密码是否正确"
    ],
    "correct": [
      0
    ],
    "explanation": "身份被确认后，仍需对具体对象和操作检查权限。",
    "tag": "认证与授权",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s03",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "数字签名本身是否保证报文保密？",
    "options": [
      "不保证，主要支持来源与完整性验证",
      "保证，任何签名后的明文都不可读",
      "保证，完全无需加密",
      "仅当文件很小时保证"
    ],
    "correct": [
      0
    ],
    "explanation": "明文报文附签名仍可被第三方阅读；保密需相应加密措施。",
    "tag": "数字签名",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s04",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "数字证书的核心作用通常是？",
    "options": [
      "将身份与公钥等信息作可信绑定",
      "保证持证软件所有行为绝对无害",
      "代替所有文件读写权限",
      "让私钥可公开发送"
    ],
    "correct": [
      0
    ],
    "explanation": "证书需验证信任链、名称、有效性和用途，它不保证应用行为永远安全。",
    "tag": "数字证书",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s05",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "对称加密的典型特点是？",
    "options": [
      "使用共享密钥，需要解决密钥分发问题",
      "无需任何密钥",
      "签名公钥与私钥必然相同",
      "只能用于用户身份编号"
    ],
    "correct": [
      0
    ],
    "explanation": "对称机制适合内容加密，但共享密钥的分发和保护仍是关键。",
    "tag": "加密机制",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s06",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "可信计算基 TCB 指什么？",
    "options": [
      "系统安全所依赖的必须信任的组件集合",
      "全部用户文件的总大小",
      "某一进程的就绪队列",
      "只包含打印驱动的任意集合"
    ],
    "correct": [
      0
    ],
    "explanation": "识别 TCB 有助于明确关键安全边界，复杂度影响全面验证难度。",
    "tag": "可信系统",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s07",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "访问控制与信息流控制的区别，正确的是？",
    "options": [
      "前者看对象访问许可，后者还看信息允许流向哪里",
      "二者都只处理 CPU 利用率",
      "信息流控制不关心数据传播",
      "一次允许读取即可证明后续任意传播安全"
    ],
    "correct": [
      0
    ],
    "explanation": "有权读某对象不自动等于允许把其内容发布到任意位置。",
    "tag": "信息流",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s08",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "木马程序的典型判断线索是？",
    "options": [
      "伪装为有用程序并夹带未授权行为",
      "仅因文件体积大就属于木马",
      "所有开源软件都是木马",
      "任何缺页异常都由木马触发"
    ],
    "correct": [
      0
    ],
    "explanation": "识别攻击应看行为和破坏边界，不能只依据文件大小或一般运行事件。",
    "tag": "攻击分类",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s09",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "最小权限思路通常要求？",
    "options": [
      "仅授予完成任务所必需的权限",
      "所有用户默认有全部权限",
      "只要已登录就免除检查",
      "把私钥共享给所有进程"
    ],
    "correct": [
      0
    ],
    "explanation": "减少无必要权限可降低错误或攻击造成的影响范围。",
    "tag": "保护原则",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-s10",
    "chapter": 12,
    "type": "single",
    "difficulty": "基础",
    "stem": "安全入口原则关注什么？",
    "options": [
      "敏感访问通过受控入口进行必要检查",
      "所有系统调用都必须免认证",
      "用户可任意绕过内核直接修改权限",
      "把所有代码都放在同一无保护地址空间"
    ],
    "correct": [
      0
    ],
    "explanation": "受控入口使关键访问不能随意绕过权限与状态检查。",
    "tag": "安全设计",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-m01",
    "chapter": 12,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "下列安全目标与情境匹配正确的有？",
    "options": [
      "数据泄漏破坏机密性",
      "未授权篡改破坏完整性",
      "拒绝服务影响可用性",
      "用户登录成功即自动保证系统绝对安全"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "认证只是安全的一环，不能消除授权、隔离、恢复等方面的需要。",
    "tag": "安全目标",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  },
  {
    "id": "c12-m02",
    "chapter": 12,
    "type": "multiple",
    "difficulty": "理解",
    "stem": "关于保护机制，下列说法正确的有？",
    "options": [
      "数字签名不自动提供报文保密",
      "证书校验应考虑身份、信任与使用场景",
      "认证成功意味着任意文件均可读写",
      "缩小可信核心有助于降低全面确认正确的复杂度"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "权限需要另外授权与检查；小可信核心也仍需正确设计和验证。",
    "tag": "保护机制",
    "source": "chapters/ch12-protection-security.md",
    "origin": "依据教材知识自编"
  }
];
