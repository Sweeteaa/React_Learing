import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = ()=>{
	axios.get('http://localhost:3000/api1/students').then(
		response => {console.log('成功',response.data)},
		error => {console.log('失败',error)}
	)
  }

  render() {
	return (
	  <button onClick={this.getStudentData}>点我获取数据</button>
	)
  }
}
