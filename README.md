# 微信小程序

- [官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

## 项目结构

小程序全局配置 `app.json`  
页面配置 `pages.json`

每个页面的构成:

- `json` JSON 配置文件
- `wxml` WXML 模板文件
- `wxss` WXSS 样式文件
- `js` JS 脚本逻辑文件

## 语法

### WXML

类似 HTML, 参考[官方文档-WXML](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/
)

#### 表达式

#### 条件与循环渲染

## 引入第三方库

### 初始化

创建一个空的 `package.json`

```sh
npm init
```

### 安装第三方库

```sh
npm install @vant/weapp -S --production
```

## HTTP 请求

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 调试配置

- 详情->项目设置->不校验合法域名
