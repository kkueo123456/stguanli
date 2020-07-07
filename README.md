# README

*主入口文件为main.js，本项目使用vue+element ui，stylus预处理器，babelrc转换器

# 文件夹目录（src下）

## 一.assets（静态资源目录）

存放静态图片和公共样式

## 二.common(公共组件目录)

## 三.compoments(组件目录)

#### 1.addguanli //添加管理员组件，用于角色管理页。

作用：添加后台管理系统账户

#### 2.diaoboLook //调拨入库和调拨查询的查看组件。 

作用:   根据传入的数据跳转到调拨详情页

#### 3.dingdan  //采购管理的填写采购订单组件。 

作用:跳转到填写订单页

#### 4.fenye     //大多数页面的分页功能组件          

作用：传递页码值给父组件用于请求相应页的数据

#### 5.head      //大多数页面头部组件，包含小面包屑导航与登出按钮     

注：面包屑导航除首页外不能点击跳转

#### 6.left         //主体左侧导航栏组件  

作用：1.根据存储的角色id进行判断，显示对应所能看到的导航条   

2.点击导航条时存储index，根据index设置跳转页面后当浏览器点击返回自动展开最后一次点击的导航条

#### 7.look       //除调拨入库和调拨查询其他页面的查看详情组件  

 作用：根据id跳转到详情页

#### 8.nullify   //作废组件

作用：根据id作废此条订单信息

#### 9.piRuku      //入库管理 采购入库的批量入库组件

作用：选择仓位后跳转到入库详情页