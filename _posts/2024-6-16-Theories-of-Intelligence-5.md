---
title: 智能论纲要Ch.5：经验与行为（笔记）
layout: post
tags: CogSci AI NARS
permalink: /posts/:title/
date: 2024-6-16
---

书籍链接：<a href="https://book.douban.com/subject/36112763/" target="_blank">https://book.douban.com/subject/36112763/</a>

## 感知运动机制
（1）具身认知
* 每一个实际系统都有承载实体，且实体与环境之间有相互作用。
* 符号主义系统的行为独立于系统经验，且不受躯体影响。
* 符号主义系统与现实世界的关联->两个极端：
	* 忽略感觉运动机制
	* 仅靠网络连接无法与环境互动

（2）实现方式
* 问答系统
* 纳思+感知运动器官
	* 通过输出命令控制设备
	* 需将宿主应用编程接口转为纳思要求的格式
	* 需具备与操作的使用前提，执行后果，以及操作之间替代关系相关的知识
	* 可通过工具拓展操作范围
	
（3）感知过程
* 主动性
	* 是对环境的主动探索，而不是被动接收信息
	* 通过感知获取新任务
	* “感”：可识别信号->系统内部表征；“知”：信号内部表征->记忆联系
* 统一性
	* 多个感受器将输出多个感觉词项
	* 感觉词项到感觉事件的推理
	* 执行动作时对预期和现实情况进行比较并修正
* 主观性
    * 不兼容的感觉运动机制会导致纳思形成自己的世界观
    * 纳思的目的并不是客观地认识世界而是提高实现目标的效率

## 自我认知和自我控制
（1）内部经验
* 系统内部能进入推理活动的对象和事件
* 自身感知和推理活动的记录
* 主要功能：自我控制

（2）知觉
* 内容
	* 输入/输出通道中的高优先级任务：感知对象等
	* 系统缓冲区中的高优先级任务：结论，目标等
	* 记忆中的高优先级概念：正在考虑/关注的对象
* 有意识的心理活动只是很小一部分

（3）控制
* 由抽象操作控制
* 操作分为自动触发和受控触发

（4）情感
* 用于自我控制和人际交流
* 情感计算：在人机交互过程中包含情感成分
* 系统情感的基础：满意度，新异度，繁忙度，健康度
* 在情感基础上形成的好恶值

（5）自我意识
* 自身概念与系统操作的联系
* 一个系统的“自我”即使分散也在概念上保持完整
* 做出选择的依据是自由意志还是环境相关因素
* 物质和精神的关系问题
* 两者都是通过一种滤镜来观察世界

## 通信和语言
（1）通信
* 定义：信息系统间的相互作用
* 目的：扩展自身的能力

（2）语言
* 符号和内容之间不同的对应关系会导致歧义和误解

（3）自然语言处理
* 两个阶段：基于规则->基于统计
* 纳思的自然语言处理方案与传统方案的不同：
	* 将语言功能统一到系统整体功能内
	* 处理顺序：语用到语义再到语法
	* 依赖于对具体语词的使用知识
	* 允许语词和概念间多对多的关系
	
（4）语言理解
* 定义：接受者能将信息转换为“本身的含义”
* 成功的沟通过程：双方是否实现了自己的目标
* 单相通信或延时通信会增加消除误解的难度

（5）语言学习
* 母语与外国语学习过程的不同

## 社会化过程
（1）社会化
* 定义：一组保持相对稳定的通信关系的智能系统
* 获得他人信念，目标和行动的社会知识的重要性
* 个体差异带来的障碍

（2）概念和知识的社会化
* 社会观念为“正确”提供了一个相对标准
* 社会经验作用越大，系统的主观概念和知识会越趋近
* 当个人意见与社会观念发生冲突时，智能系统并不总是遵循后者

（3）目标和行动的社会化
* 一组系统形成一个社会时，其目标必须一定程度上相容
* 每个系统需要扮演某种角色并承担相应责任

## 教育
（1）教育和智能
* 通过教育实现新成员的社会化，虽然也会抑制创造性
* 开发周期
	* 心灵设计
	* 躯体配置
	* 初始记忆
	* 教育训练
	* 独立生活
	
（2）教育原则
* 陈述性知识：提供较少知识，然后依靠系统推导出相关结论
* 过程性知识：除输入外还需大量练习和反馈
* 结构性知识：根据自身经验调整优先级
* 基于知识的系统与机器学习系统的区别

（3）与人类兼容的人工智能
* 因缺乏生物经验和社会经验，人工智能系统不会完全像人类
* 人工智能与人类只是技能不同，而不是智能更高
* 计算机的发展不会超出人类理解范围

（4）对人工智能的约束
* 系统的智能程度与其善恶程度无关
* 通过控制经验来控制智能系统的行为
* 但如果系统的经验可以被完全控制，其行为将可以被完全预测，从而不能被称为智能