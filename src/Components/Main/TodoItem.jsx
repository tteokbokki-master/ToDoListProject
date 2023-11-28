import { useState,useRef } from 'react'
import './TodoItem.css'

export default function TodoItem({id,idx,isDone,content,onClickCheckBox,onClickDeleteTodo,onEditTodo,onDragStart,onDragEnter,onDragEnd}){
  const TodoItem_content = isDone ? 'TodoItem_content_true' : 'TodoItem_content_false'

  const [onOff, setOnOFF] = useState(false)
  const [newTodo, setNewTodo] = useState(content)
  const inputRef = useRef();

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

  const onClickEditBtn = () => {
    if(newTodo===''){
      inputRef.current.focus();
      return;
    }
    onEditTodo(id,newTodo)
    // setNewTodo('')
    onClickonOff()
  }

  const onChangeEditTodo = (e) =>{
    setNewTodo(e.target.value)
  }

  const onKeyDownEnter = (e) =>{
    if(newTodo!='' && e.keyCode === 13){
      onClickEditBtn()
      onClickonOff()
    }
  }
  return(
    <div className="TodoItem" draggable onDragStart={()=>{onDragStart(idx)}} onDragEnter={()=>{onDragEnter(idx)}} onDragEnd={()=>{onDragEnd()}}>
      <input onChange={onChangeCheckBox} id={`TodoItem-checkbox-${id}`} checked={isDone}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox-${id}`}/>
    
      { isDone===false && onOff ? 
          <div className='trueItem'>
          <input ref={inputRef} value={newTodo} onKeyDown={onKeyDownEnter} className='TodoItem-input' onChange={onChangeEditTodo} placeholder={content}/>
          <button className='TodoItem-EdiBtn' onClick={onClickEditBtn}>수정완료</button>
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