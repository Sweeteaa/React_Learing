# 学习React的记录

## 相关JS库
1. react.js：React核心库。
2. react-dom.js：提供操作DOM的react扩展库。
3. babel.min.js：解析JSX语法代码转为JS代码的库。

***

## JSX
#### 1.全称:  JavaScript XML
#### 2.react定义的一种类似于XML的JS扩展语法
JS + XML本质是React.createElement(component, props, ...children)方法的语法糖
#### 3.作用: 用来简化创建虚拟DOM 
1) 写法：`var ele = <h1>Hello JSX!</h1>`
2) 注意1：它不是字符串, 也不是HTML/XML标签
3) 注意2：它最终产生的就是一个JS对象
#### 4.标签名任意: HTML标签或其它标签
#### 5.标签属性任意: HTML标签属性或其它
#### 6.基本语法规则
1) 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
2) 遇到以 { 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含
#### 7.babel.js的作用
1) 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
2) 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理

***

## 组件三大核心属性
    - state
    - props
    - refs与事件处理

## state
1. state是**组件对象**最重要的属性, 值是对象(可以包含多个key-value的组合)
2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

### 强烈注意

1. 组件中render方法中的this为组件实例对象
2. **组件自定义的方法中this为undefined**，如何解决？
   - a) 强制绑定this: 通过函数对象的bind()
   - b) 箭头函数
3. 状态数据，不能直接修改或更新，需要借助**setState()**

## props
1. 每个组件对象都会有props(properties的简写)属性
2. 组件标签的所有属性都保存在props中

##### 作用：通过标签属性从组件外向组件内传递变化的数据 **注意: 组件内部不要修改props数据**

## refs
- 组件内的标签可以定义ref属性来标识自己

***

## 生命周期
#### 旧生命周期
![react生命周期(旧)](https://user-images.githubusercontent.com/88074316/187479246-47ba37d4-637c-478d-8943-1c1ad5b89e9e.png)
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
    1. constructor()
    2. componentWillMount()
    3. render()
    4. componentDidMount()
2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    1. shouldComponentUpdate()
    2. componentWillUpdate()
    3. render()
    4. componentDidUpdate()
3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    1. componentWillUnmount()

#### 新生命周期
![react生命周期(新)](https://user-images.githubusercontent.com/88074316/187479287-da53632b-0fc0-4230-8413-55418c94fa90.png)
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
    1. constructor()
    2. getDerivedStateFromProps *
    3. render()
    4. componentDidMount()
2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    1. getDerivedStateFromProps *
    2. shouldComponentUpdate()
    3. render()
    4. getSnapshotBeforeUpdate *
    5. componentDidUpdate()
3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    1. componentWillUnmount()

## 虚拟DOM与DOM Diffing算法
![虚拟DOM与DOM Diffing算法](https://img-blog.csdnimg.cn/be950a8be5ce492b891ed4875bcd40a7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAYnVn6ZmE5L2T,size_20,color_FFFFFF,t_70,g_se,x_16)
***

## React应用(基于React脚手架)

1. create-react-app ————创建react应用
    1. 全局安装：**npm i -g create-react-app**
    2. 切换到想创项目的目录，使用命令：**create-react-app hello-react**
    3. 进入项目文件夹：**cd hello-react**
    4. 启动项目：**npm start**

```
public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面 *
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件 *
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件 *
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
```
***

## todoList案例相关知识点
    1. 拆分组件、实现静态组件，注意：className、style的写法
    2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
                ——某个组件使用：放在其自身的state中
                ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    3. 关于父子之间通信：
            1.【父组件】给【子组件】传递数据：通过props传递
            2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4. 注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value
    5. 状态在哪里，操作状态的方法就在哪里

***

## react脚手架配置代理总结

### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。