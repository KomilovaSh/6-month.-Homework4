import { useEffect, useState } from 'react';
import Form from './components/Form'
import './App.css'
import TodoItem from './components/TodoItem'


function App() {
  const [todos, setTodo] =useState([]);
  function getDate () {
    let data=[];
    if (localStorage.getItem('todos') ){
     data=JSON.parse(localStorage.getItem('todos'));
    }
    return data;
}

  useEffect(() => {
     setTodo(getDate());
  }, [])

  return (
    <div className='todo-app-wrapper'>
    <div className='sidebar'>
       <ul className='list'>
        <li>All</li>
        <li>Grocer</li>
        <li>College</li>
        <li>Payments</li>
       </ul>
    </div>
    <div className='main'>
      <h2>All Tasks</h2>
      <Form></Form>

      <TodoItem></TodoItem>
    </div>
    </div>
  )
}

export default App
