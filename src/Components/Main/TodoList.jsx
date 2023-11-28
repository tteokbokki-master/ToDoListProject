import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList({todos,onClickCheckBox,onClickDeleteTodo,onEditTodo,onDragStart,onDragEnter,onDragEnd}){
  return(
    
    <div className="TodoList">
      <div className="TodoList-TodoItem">
      {
        todos.map((todo,idx)=> 
          <TodoItem key={todo.id} idx={idx} {...todo} onClickCheckBox={onClickCheckBox} onClickDeleteTodo={onClickDeleteTodo} onEditTodo={onEditTodo} onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd={onDragEnd}/>
        )
      }
      </div>
    </div>
  )
}
