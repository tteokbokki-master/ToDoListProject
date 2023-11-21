import { useState } from 'react'
import './TodoItem.css'

export default function TodoItem({id,isDone,content,onClickCheckBox,onClickDeleteTodo}){

  const TodoItem_content = isDone ? 'TodoItem_content_true' : 'TodoItem_content_false'

  const [onOff, setOnOFF] = useState(false)

  const onChangeCheckBox = () =>{
    if(onOff===false){
    onClickCheckBox(id)
    }
  }
  const onClickDelete = () =>{
    onClickDeleteTodo(id)
  }

  const onClickonOff = () =>{
    setOnOFF(!onOff)
  }

  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} id={`TodoItem-checkbox-${id}`} checked={isDone}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox-${id}`}/>
      
      { isDone===false && onOff ? 
          <div className='trueItem'>
          <input className='TodoItem-input' placeholder={content}/>
          <button className='TodoItem-EdiBtn'>수정완료</button>
          <button className='TodoItem-DelBtn' onClick={onClickonOff}>닫기</button> 
        </div> 
      :
        <div className='falseItem'>
          <p className={TodoItem_content}>{content}</p> 
          <button className='TodoItem-EdiBtn' onClick={onClickonOff}>수정</button>
          <button className='TodoItem-DelBtn' onClick={onClickDelete}>삭제</button> 
      </div>
      }
    </div>
  )
  }