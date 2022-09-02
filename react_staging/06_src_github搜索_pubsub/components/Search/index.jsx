import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
//eslint-disable-next-line
export default class Search extends Component {
  search =()=>{
    //连续解构赋值
    const {keyWordElement:{value:keyWord}} = this
    PubSub.publish('atguigu', {isFirst:false, isLoading:true})
    // // this.props.updateAppState({isFirst:false, isLoading:true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        response =>{
            console.log(response.data.items)
            // this.props.updateAppState({isLoading:false, user:response.data.items})
            PubSub.publish('atguigu', {isLoading:false, user:response.data.items})
        },
        error =>{
            // this.props.updateAppState({isLoading:false, err:error.message})
            PubSub.publish('atguigu', {isLoading:false, err:error.message})
        }
    )
  }
  render() {
    return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        </section>
    )
  }
}
