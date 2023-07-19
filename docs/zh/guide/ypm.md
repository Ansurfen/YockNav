---
title: yock包管理工具
tags:
    - yock
    - build-tool
    - package-manager
categories: yock
---

## 创建新模块

使用: `ypm init test` 创建一个名为test的模块
参数: `-d` 布尔类型，若指定，创建的新模块在当前目录的子目录创建

## 补全代码提示

使用: `ypm tidy`

## 安装模块

使用: `ypm install ark` 安装名为ark的模块
参数: `-g` 布尔类型，若指定，安装的模块挂载在yock的全局目录下，否则安装在当前工作目录下

## 卸载模块

使用: `ypm uninstall ark` 卸载名为ark的模块
参数: `-g` 布尔类型，若指定，卸载挂载在yock的全局目录下的模块，否则卸载当前工作目录下的模块

## 添加模块

使用: `ypm add ark` 将ark模块添加到当前项目当中

## 删除模块

使用: `ypm rm ark` 将ark模块从当前项目移除

## 缓存

#### 列出缓存

使用: `ypm cache ls` 列出目录中存在的所有缓存信息

#### 释放缓存

使用: `ypm cache free` 释放超时的缓存
参数: 
`-f` 布尔类型，将全部低于level（默认为2）的缓存释放，包括没有时间期限的
`-l` 整型，设置level等级

## 代理

ypm 拉取模块的地址

## 添加代理
使用: `ypm proxy add gitlab.lua` 将代理文件添加到环境当中，并根据其中的信息分配代理标识符

## 删除代理
使用: `ypm proxy del github` 删除名为github的代理

## 创建代理
使用: `ypm proxy new gitlab` 创建名为gitlab的代理，这将会在工作目录生成一个代理文件
参数: 
`-a`: 字符类型，设置作者的名称
`-l`: 字符类型，设置代理文件的开源协议

## 拉取代理

使用: `ypm proxy get [url]` 从指定url拉取代理文件，自动挂载

## 打包项目

使用: `ypm build` 将当前工作目录下的文件及文件夹打包成压缩包的形式，同时根据.yockignore忽略某些文件/文件夹，并将.yockignore的规则添加到.gitignore当中。