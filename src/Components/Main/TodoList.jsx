import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList({todos,onClickCheckBox,onClickDeleteTodo}){
  return(
    
    <div className="TodoList">
      <div className="TodoList-TodoItem">
      {
        todos.map((todo)=> 
          <TodoItem key={todo.id} {...todo} onClickCheckBox={onClickCheckBox} onClickDeleteTodo={onClickDeleteTodo}/>
        )
      }
      </div>
    </div>
  )
}
