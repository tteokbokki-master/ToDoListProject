import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList({todos,onClickCheckBox,onClickDeleteTodo,onEditTodo}){
  return(
    
    <div className="TodoList">
      <div className="TodoList-TodoItem">
      {
        todos.map((todo)=> 
          <TodoItem key={todo.id} {...todo} onClickCheckBox={onClickCheckBox} onClickDeleteTodo={onClickDeleteTodo} onEditTodo={onEditTodo}/>
        )
      }
      </div>
    </div>
  )
}
