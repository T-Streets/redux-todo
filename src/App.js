import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import StickyNotes from './components/StickyNotes'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <StickyNotes />
      </div>
    );
  }
}
