import './TodoList.css'
import React from 'react'
import TodoItem from './TodoItem'
import { useContext } from 'react'
import { TodoContext } from './TodoContext'

function TodoList(){
  const {todos} = useContext(TodoContext);
  return(
    <div className="TodoList">
      <div className="TodoList-TodoItem">
      {
        todos.map((todo,idx)=> 
          <TodoItem key={todo.id} idx={idx} {...todo}/>
        )
      }
      </div>
    </div>
  )
}
export default React.memo(TodoList)