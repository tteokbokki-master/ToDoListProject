import './Home.css'
import Header from '../Components/Main/Header'
import TodoEditor from '../Components/Main/TodoEditor'
import TodoList from '../Components/Main/TodoList'
import TodoCheck from '../Components/Main/TodoCheck'
import { useState,useRef } from 'react'

export default function Home(){

  const [todos,setTodos]= useState([]);
  const currentId = useRef(0);

  const isDone_O = todos.filter((todo)=>{
    return todo.isDone != false
  })
  const isDone_X = todos.filter((todo)=>{
    return todo.isDone != true
  })
  
  const onClickCheckBox = (currentId) =>{
    setTodos(todos.map((todo)=>todo.id === currentId ? {...todo, isDone: !todo.isDone} : todo))
  }

  const onClickDeleteTodo = (currentId) => {
    setTodos(todos.filter((todo)=> todo.id != currentId))
  }

  console.log(todos)
  const onClickAddTodos = (content) =>{
    const data = {
      id : currentId.current++,
      isDone : false,
      content : content,
    }
    setTodos([...todos,data])
  }

  


  return(
    <div className="Home">
      <Header/>
      <TodoEditor onClickAddTodos={onClickAddTodos}/>
      <TodoCheck isDone_O={isDone_O} isDone_X={isDone_X}/>
      <TodoList todos={todos} onClickCheckBox={onClickCheckBox} onClickDeleteTodo={onClickDeleteTodo}/>
    </div>

  )
}