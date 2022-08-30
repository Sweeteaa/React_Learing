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

## 生命周期
#### 旧生命周期

#### 新生命周期

