(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(e,r,t){"use strict";t.r(r);var n=t(42),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码注释中文版 【 Gitee仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://codechina.csdn.net/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v(" CSDN仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://github.com/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Github仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://weharmony.coding.net/public/harmony/kernel_liteos_a_note/git/files",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Coding仓 】"),t("OutboundLink")],1),e._v("精读内核源码,中文详细注解.深挖地基工程,构建底层网图.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108727970",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙源码分析系列篇 【 CSDN "),t("OutboundLink")],1),t("a",{attrs:{href:"https://my.oschina.net/u/3751245/blog/4626852",target:"_blank",rel:"noopener noreferrer"}},[e._v("| OSCHINA "),t("OutboundLink")],1),t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/wikis/pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("| WIKI 】"),t("OutboundLink")],1),e._v("问答式导读, 生活式比喻, 图形化展示, 层层剥开内核神秘外衣.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"鸿蒙内核源码注释中文版-深挖内核地基工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#鸿蒙内核源码注释中文版-深挖内核地基工程"}},[e._v("#")]),e._v(" "),t("strong",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码注释中文版 | 深挖内核地基工程"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("点击目录和文件查看详细源码中文注解,走进内核的世界.")]),e._v(" "),t("hr"),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kernel_liteos_a_note"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kernel"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/",target:"_blank",rel:"noopener noreferrer"}},[e._v("base"),t("OutboundLink")],1),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/",target:"_blank",rel:"noopener noreferrer"}},[e._v("core"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 这个core指的是与CPU core相关的文件\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_bitmap.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_bitmap.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 位图管理器有什么作用 ? 在内核常应用于哪些场景 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_process.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_process.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108595941",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(进程管理篇)"),t("OutboundLink")],1),e._v(" -> 进程是内核的资源管理单元,它是如何管理 任务, 内存,文件的 ? 进程间是如何协作的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_sortlink.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_sortlink.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 排序链表的实现,它的应用场景是怎样的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_swtmr.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_swtmr.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核的定时器是如何实现和管理的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_sys.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_sys.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 几个跟tick相关的转化函数")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_task.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_task.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108661248",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(Task管理篇)"),t("OutboundLink")],1),e._v(" -> Task是内核调度的单元,它解决了什么问题 ? 如何调度 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_tick.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_tick.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108603468",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(时钟管理篇)"),t("OutboundLink")],1),e._v(" ->  是谁在一直触发调度 ? 硬时钟中断都干了些什么事?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/core/los_timeslice.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_timeslice.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 进程和任务能一直占有CPU吗 ? 怎么合理的分配时间 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ipc"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 进程间通讯有哪些方式 ? 请说出三种 ? 是如何实现的 ?\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_event.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_event.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 事件解决了什么问题 ? 怎么管理的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/base/los_futex.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_futex.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> futex 是Fast Userspace muTexes的缩写(快速用户空间互斥体),它有什么作用 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/base/los_ipcdebug.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_ipcdebug.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 进程间通讯如何调试 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_mux.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_mux.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 互斥量,有你没我的零和博弈, 为什么需要互斥量 ? 是如何实现的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_queue.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_queue.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核消息队列是如何实现的 ? 对长度和大小有限制吗 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_queue_debug.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_queue_debug.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->  如何调试消息队列 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_sem.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_sem.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 信号量解决了什么问题 ? 它的本质是什么 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_sem_debug.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_sem_debug.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何调试信号量 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/ipc/los_signal.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_signal.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 信号解决了什么问题? 你知道哪些信号 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mem"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内存管理模块管理系统的内存资源，它是操作系统的核心模块之一\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/bestfit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bestfit"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 动态内存管理的优点是按需分配，那缺点又是什么?\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/bestfit/los_memory.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_memory.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 鸿蒙内核中动态内存池由哪三个部分组成 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/bestfit/los_multipledlinkhead.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_multipledlinkhead.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 什么是最佳适应算法? 是如何实现 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/bestfit_little/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bestfit_little"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> bestfit_little算法是在最佳适配算法的基础上加入slab机制形成的算法。\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/bestfit/los_heap.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_heap.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> slab算法机制是怎样的? 又是如何实现的 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/common/",target:"_blank",rel:"noopener noreferrer"}},[e._v("common"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/membox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("membox"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 静态内存池的优点是分配和释放效率高，无碎片, 那缺点呢 ?\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mem/membox/los_membox.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_membox.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 静态内存有什么用? 是如何实现的?")])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("misc"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/kill_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("kill_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> shell命令kill的实现,熟悉的 kill 9 18 的背后发生了什么?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/los_misc.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_misc.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/los_stackinfo.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_stackinfo.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 栈有哪些信息 ? 如何检测栈是否异常 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/mempt_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("mempt_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 和内存相关的shell命令有哪些 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/swtmr_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("swtmr_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 和软时钟相关的shell命令有哪些 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/sysinfo_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("sysinfo_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 和系统信息相关的shell命令有哪些 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/task_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("task_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 和任务相关的shell命令有哪些 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/misc/vm_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("vm_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 和虚拟内存相关的shell命令有哪些 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mp"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> MP指支持多处理器的模块\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mp/los_lockdep.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_lockdep.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 死锁是怎么发生的 ? 如何检测死锁 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mp/los_mp.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_mp.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 鸿蒙最大支持多少个CPU ? 它们是如何工作的? CPU之间是如何通讯的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mp/los_percpu.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_percpu.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->  CPU有哪些信息 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/mp/los_stat.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_stat.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> CPU的运行信息如何统计 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/om/",target:"_blank",rel:"noopener noreferrer"}},[e._v("om"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/om/los_err.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_err.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/sched/sched_sq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sched/sched_sq"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/sched/sched_sq/los_priqueue.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_priqueue.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108626671",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(调度队列篇)"),t("OutboundLink")],1),e._v(" -> 为什么只有就绪状态才会有队列 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/sched/sched_sq/los_sched.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_sched.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108705968",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(调度机制篇)"),t("OutboundLink")],1),e._v(" -> 哪些情况下会触发调度 ? 调度算法是怎样的 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vm"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/109437223",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(内存规则篇)"),t("OutboundLink")],1),e._v(" -> 什么是虚拟内存 ? 虚拟内存全景图是怎样的 ?\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_boot.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_boot.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 开机阶段内存是如何初始化的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_dump.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_dump.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何 dump 内存数据 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_fault.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_fault.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 为什么会缺页 ? 缺页怎么处理 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_filemap.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_filemap.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 文件和内存是如何映射? 什么是 写时拷贝技术(cow) ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_iomap.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_iomap.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 设备和内存是如何映射 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_map.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_map.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/109032636",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(内存映射篇)"),t("OutboundLink")],1),e._v(" -> 内核空间,用户空间,线性区是如何分配的,虚拟内存<--\x3e物理内存是如何映射的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_page.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_page.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 什么是物理页框,哪些地方会用到它 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_phys.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_phys.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/111765600",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码分析(物理内存篇)"),t("OutboundLink")],1),e._v(" -> 段页式管理,物理内存是如何分配和回收的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_scan.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_scan.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> LRU算法是如何运作的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/los_vm_syscall.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vm_syscall.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 系统调用之内存, 用户进程如何申请内存 ? 底层发生了什么 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/oom.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("oom.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内存溢出是如何检测的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/base/vm/shm.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("shm.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 共享内存是如何实现的 ?")])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/",target:"_blank",rel:"noopener noreferrer"}},[e._v("common"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/console.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("console.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 熟悉的控制台是如何实现的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/hwi_shell.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("hwi_shell.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何查询硬件中断 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_cir_buf.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_cir_buf.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 环形缓冲区的读写是如何实现的 ? 常用于什么场景下 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_config.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_config.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核有哪些配置信息 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_exc_interaction.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_exc_interaction.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 任务出现异常如何检测 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_excinfo.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_excinfo.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 异常有哪些信息 ? 如何记录异常信息 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_hilog.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_hilog.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核是如何封装日志的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_magickey.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_magickey.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 魔法键有什么作用 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_printf.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_printf.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核对 printf 做了哪些封装 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_rootfs.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_rootfs.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 什么是根文件系统 ? 为什么需要它 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/los_seq_buf.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_seq_buf.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/common/virtual_serial.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual_serial.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何实现访问串口如同访问文件一样方便 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/kernel/extended/tree/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("extended"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/kernel/extended/tree/master/cppsupport/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cppsupport"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/cppsupport/los_cppsupport.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_cppsupport.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 对C++是如何支持的 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/cpup/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cpup"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/cpup/cpup_shellcmd.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("cpup_shellcmd.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何实时查询系统CPU的占用率 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/cpup/los_cpup.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_cpup.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 内核如何做到实时统计CPU性能的 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/dynload/src/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dynload/src"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/dynload/src/los_exec_elf.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_exec_elf.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 鸿蒙如何运行ELF ? 什么是腾笼换鸟技术 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/dynload/src/los_load_elf.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_load_elf.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 鸿蒙如何动态加载 ELF ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/liteipc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("liteipc"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/liteipc/hm_liteipc.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("hm_liteipc.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何用文件的方式读取消息队列 ? liteipc和普通消息队列区别有哪些 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/tickless/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tickless"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/tickless/los_tickless.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_tickless.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 新定时机制新在哪里 ? 它解决了哪些问题 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/trace/",target:"_blank",rel:"noopener noreferrer"}},[e._v("trace"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_notetree/master/kernel/extended/los_trace.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_trace.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 如何实现跟踪 ? 内核在跟踪什么 ?")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vdso"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> 用户空间访问内核空间有哪些途径 ?\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/src/",target:"_blank",rel:"noopener noreferrer"}},[e._v("src"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/src/los_vdso.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vdso.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" -> VDSO(Virtual Dynamically-linked Shared Object) 是如何实现的 ?")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/src/los_vdso_text.S",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vdso_text.S"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/usr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("usr"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/extended/vdso/usr/los_vdso_sys.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_vdso_sys.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")])])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/user/src/",target:"_blank",rel:"noopener noreferrer"}},[e._v("user/src"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/tree/master/kernel/user/src/los_user_init.c",target:"_blank",rel:"noopener noreferrer"}},[e._v("los_user_init.c"),t("OutboundLink")],1),e._v(" -> "),t("a",{attrs:{href:""}}),e._v(" ->")])])])])])])])]),e._v(" "),t("p",[t("strong",[e._v("喜欢就关注下吧,您的关注真的很重要")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/weharmony/kernel_liteos_a_note/raw/master/zzz/pic/other/wxcode.png",alt:"鸿蒙内核源码分析公众号"}})]),e._v(" "),t("h2",{attrs:{id:"作者邮箱-weharmony-126-com"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作者邮箱-weharmony-126-com"}},[e._v("#")]),e._v(" 作者邮箱:weharmony@126.com")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙内核源码注释中文版 【 Gitee仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://codechina.csdn.net/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v(" CSDN仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://github.com/kuangyufei/kernel_liteos_a_note",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Github仓 "),t("OutboundLink")],1),e._v("|"),t("a",{attrs:{href:"https://weharmony.coding.net/public/harmony/kernel_liteos_a_note/git/files",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Coding仓 】"),t("OutboundLink")],1),e._v("精读内核源码,中文详细注解.深挖地基工程,构建底层网图.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/kuangyufei/article/details/108727970",target:"_blank",rel:"noopener noreferrer"}},[e._v("鸿蒙源码分析系列篇 【 CSDN "),t("OutboundLink")],1),t("a",{attrs:{href:"https://my.oschina.net/u/3751245/blog/4626852",target:"_blank",rel:"noopener noreferrer"}},[e._v("| OSCHINA "),t("OutboundLink")],1),t("a",{attrs:{href:"https://gitee.com/weharmony/kernel_liteos_a_note/wikis/pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("| WIKI 】"),t("OutboundLink")],1),e._v("问答式导读, 生活式比喻, 图形化展示, 层层剥开内核神秘外衣.")])])}),[],!1,null,null,null);r.default=o.exports}}]);