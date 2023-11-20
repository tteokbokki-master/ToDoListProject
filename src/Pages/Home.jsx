import './Home.css'
import Header from '../Components/Main/Header'
import TodoEditor from '../Components/Main/TodoEditor'
import TodoList from '../Components/Main/TodoList'
import TodoCheck from '../Components/Main/TodoCheck'
import { useState,useRef } from 'react'

export default function Home(){

  const [todos,setTodos]= useState([]);
  const currentId = useRef(0);

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
      <TodoCheck/>
      <TodoList todos={todos}/>
    </div>

  )
}