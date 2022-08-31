import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
				<div className="todo-wrap">
					<Header/>
					<List />
					<Footer/>
				</div>
			</div>
    )
  }
}
