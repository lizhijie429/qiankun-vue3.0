# qiankun-vue3.0

在你决定 clone 项目的时候，希望你可以帮我点个 ⭐，这将对我是极大的鼓励。

有问题可加微信 lizhijie429 邀请你进群。

## 介绍

基于 qiankun+vite+vue3.0+pinia+typescript 技术栈实现的前端微应用架构，实现了动态路由（所有路由均使用 history 模式）、主子应用以及子子应用之间的通信，并做了简单的自动化脚本命令，可用一行命令所有子应用的依赖安装、启动以及打包编译。

开源该 demo 的目的，只是想为大家在使用 qiankun 时提供一种思路。

## 问答

关于问题，请使用[issues](https://github.com/lizhijie429/qiankun-vue3.0/issues)或加微信 lizhijie429

## 项目运行

1. 项目克隆

   ```bash
   git clone https://github.com/lizhijie429/qiankun-vue3.0/issues
   ```

2. 依赖安装

   ```bash
   cd qiankun-vue3.0
   pnpm install
   ```

3. 项目启动

   ```bash
   cd qiankun-vue3.0
   pnpm run start
   ```

## 编译部署

关于 qiankun 项目打包编译请查看文档：[入门教程 (umijs.org)](https://qiankun.umijs.org/zh/cookbook#场景-1：主应用和微应用部署到同一个服务器（同一个-ip-和端口）) demo 将主应用和微应用部署到同一个服务器（同一个 IP 和端口），其他部署方式请自行查看官网文档。

打包编译

```bash
cd qiankun-vue3.0
npm run build
```

本地部署测试（ Node.js 静态文件服务器——serve）

```bash
# 启动静态文件服务器
npm install -g serve
# -s 参数的意思是将其架设在 Single-Page Application 模式下
# 这个模式会处理即将提到的路由问题
serve -s dist
```

浏览器打开网址：http://localhost:5000 即可预览。

## 支持

如果觉得 qiankun-vue3.0 这个 demo 为你提供了不错的思路，或者已经在使用了，希望你可以帮我点个 ⭐ ，这将对我是极大的鼓励。
