import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList(){

  return(
    <div className="TodoList">
      <TodoItem id={1}/>
      <TodoItem id={2}/>
      <TodoItem id={3}/>
    </div>
  )
}
