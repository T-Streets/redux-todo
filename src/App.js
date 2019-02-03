import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoList />
        </header>
      </div>
    );
  }
}
