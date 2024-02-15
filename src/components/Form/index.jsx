import { useState } from 'react'
import './index.css'

function Form() {
const [todo, setTodo]=useState ('');

function getDate () {
    let data=[];
    if (localStorage.getItem('todos') ){
     data=JSON.parse(localStorage.getItem('todos'));
    }
    return data;
}


function validate (todo) {
    if(todo.trim().length<3) {
        alert("Kamida 3ta belgidan iborat bo'lsin!");
        return false;
    }
    return true;
}

function handleSubmit (e) {
    e.preventDefault();
    if(validate(todo)) {
        let obj={
            id: Date.now(),
            name: todo,
            category: "Payment",
            status: "active"
        }
      
        let todos=getDate();
        todos.push(obj);
        localStorage.setItem('todos', todos);
    }
    console.log(todo);
    setTodo('');

}

  return (
    <form onSubmit={handleSubmit}>
       <input value={todo} onChange={(e) => (setTodo(e.target.value))} className='field' type='text' placeholder="Add a new task inside 'All' category"/>
    </form>
    
  )
}

export default Form