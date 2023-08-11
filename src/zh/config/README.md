---
title: 配置
---

yock 在运行脚本前，会载入本地配置文件为正式的运行做好准备工作，例如，指明日志如何工作、守护进程的启动以及所绑定的端口等，这些都离不开配置文件的支持。你可以在`{用户目录}/.yock`下面查看到 yock.yaml 文件，那是 yock 解释器的配置，除此以外还有 yockd.yaml 规定守护进程的启动和运行。
对于其他启动和更新不频繁的应用来说，全局配置文件没什么问题，但对于yock这样的解释器来说，无疑是一场灾难。想象一下这样一个场景，在某一个时刻需要同时运行两份不同配置的脚本，这对于配置写在文件来说，无疑会造成数据冒险，甚至造成多写者权限否决等问题。为了解决他们，yock引入了option函数，能够在脚本运行中动态的修改配置。

至此，你已经了解了以配置文件为首的全局配置和option函数为首的局部配置。我们将从下一小节开始，逐步展开介绍。