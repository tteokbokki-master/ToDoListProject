import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList(){

  return(
    <div className="TodoList">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}
