---
name: os-final-review
description: "基于《计算机操作系统（慕课版）》与本项目的大题考纲复习操作系统。适用于四类简答题、进程调度、银行家算法、生产者—消费者、缺页率、磁盘访问时间和内存 EAT，以及按章节查询。"
---

# 计算机操作系统（慕课版）· 期末复习

**编著：**汤小丹、王红玲、姜华、汤子瀛 | **版次：**2021 年 6 月第 1 版 | **附件：**410 页，正文 12 章 | **整理：**2026-11-21

## 如何使用

- 问“怎么复习”：先读[四类简答题](short-answers.md)和[课后题索引](exercises/README.md)。已知的是大题范围，不推定客观题范围，不将首刷题描述为老师押题或确定原题。
- 问具体习题：先用题号定位对应专题，告知书页和 PDF 页，按“题意与假设 → 过程表 → 结论 → 易错点”作答。若用户想自测，先给提示，等提交后再给答案。
- 问概念：先看下面的章节索引，再按需读对应小节。现代系统实现的细节不要用教材中的历史实例硬套；如果需要超出教材的实现说明，明确标为补充。

## 大题的九个判断框架

| 看到什么 | 应该怎么答 | 正文导航 |
|---|---|---|
| OS 特征 | 定义并发、共享、虚拟、异步；并发是同段时间，平行执行是同时刻；并发和共享互为条件 | [第 1 章](chapters/ch01-introduction.md) |
| 处理机调度 | 从后备作业接纳、内外存换入换出、就绪进程分派区分三层；分开写触发时机、抢占原则和目标 | [第 3 章](chapters/ch03-scheduling-deadlock.md) |
| 进程同步 | 先区分先后依赖和竞争互斥，再写临界区准则；若问 P/V，说明原子性及阻塞/唤醒条件 | [第 4 章](chapters/ch04-synchronization.md) |
| I/O | 四层是软件职责，轮询/中断/DMA/通道是控制方式；用“谁搬数据、CPU 何时介入”区分 | [第 7 章](chapters/ch07-io.md) |
| 进程调度计算 | 只从已到达且就绪者选；抢占看剩余量，RR 看队列；先得完成时刻，再算平均周转 | [调度专题](exercises/01-cpu-scheduling.md) |
| 银行家算法 | `Need=Max−Allocation`；每维检查 `Need≤Work`，虚拟完成后归还 `Allocation`；请求要先试再判 | [银行家专题](exercises/02-bankers.md) |
| 生产者—消费者 | 拆分空位、可消费对象类别、互斥三类约束；可能阻塞的资源 P 在互斥 P 前 | [P/V 专题](exercises/03-producer-consumer.md) |
| 缺页率 | 写初始页框及替换元数据，每次访问标命中/缺页，分母为本次序列中的访页次数 | [置换专题](exercises/04-page-fault-rate.md) |
| 磁盘时间 / EAT | 单次磁盘访问把耗时相加；EAT 把互斥访存分支按概率加权；先统一单位和费用边界 | [磁盘与 EAT 专题](exercises/05-disk-and-eat.md) |

## 章节索引

“主线”表示有已知大题落点；“支撑”有相关底层概念；“备查”不等于不考。编号范围是此附件的 **PDF 页序**。

| 章 | 主题 | PDF 页序 | 层级 |
|---|---|---:|---|
| [01](chapters/ch01-introduction.md) | 操作系统引论 | 22–59 | 主线：特征 |
| [02](chapters/ch02-processes-threads.md) | 进程的描述与控制 | 60–93 | 支撑：状态、PCB、线程 |
| [03](chapters/ch03-scheduling-deadlock.md) | 处理机调度与死锁 | 94–129 | 主线：调度、银行家 |
| [04](chapters/ch04-synchronization.md) | 进程同步 | 130–156 | 主线：简答、P/V |
| [05](chapters/ch05-memory-management.md) | 存储器管理 | 157–192 | 支撑：分页、TLB EAT |
| [06](chapters/ch06-virtual-memory.md) | 虚拟存储器 | 193–219 | 主线：缺页率、EAT |
| [07](chapters/ch07-io.md) | 输入/输出系统 | 220–268 | 主线：I/O、磁盘时间 |
| [08](chapters/ch08-files.md) | 文件管理 | 269–300 | 备查：目录、共享、保护 |
| [09](chapters/ch09-disk-storage.md) | 磁盘存储器管理 | 301–332 | 备查：文件块、空闲块、容错 |
| [10](chapters/ch10-multiprocessor.md) | 多处理机操作系统 | 333–360 | 备查：UMA/NUMA、锁、调度 |
| [11](chapters/ch11-virtualization-cloud.md) | 虚拟化和云计算 | 361–380 | 备查：VMM、虚拟化、迁移 |
| [12](chapters/ch12-protection-security.md) | 保护和安全 | 381–407 | 备查：访问控制、认证、防护 |

## 配套检索

- [概念与缩写](glossary.md) · [解题模式](patterns.md) · [公式速查](cheatsheet.md)
- [限时模拟](mock-exam.md) · [模拟答案](mock-answers.md) · [教材来源与口径](sources.md)
