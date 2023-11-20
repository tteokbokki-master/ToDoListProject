import './TodoItem.css'

export default function TodoItem({id,isDone,content,onClickCheckBox,onClickDeleteTodo}){
  
  const TodoItem_content = isDone ? 'TodoItem_content_true' : 'TodoItem_content_false'

  const onChangeCheckBox = () =>{
    onClickCheckBox(id)
    console.log(id)
    console.log(content)
  }
  const onClickDelete = () =>{
    onClickDeleteTodo(id)
  }
  

  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} id={`TodoItem-checkbox-${id}`} checked={isDone}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox-${id}`}/>
      <p className={TodoItem_content}>{content}</p>
      <button className='TodoItem-EdiBtn'>수정</button>
      <button className='TodoItem-DelBtn' onClick={onClickDelete}>삭제</button>
    </div>
  )
  }