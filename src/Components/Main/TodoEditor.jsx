import { useState,useRef, useContext} from 'react'
import { TodoContext } from './TodoContext';
import React from 'react';

import './TodoEditor.css'
function TodoEditor(){

  const {onClickAddTodos} = useContext(TodoContext);
  
  const [value, setValue] = useState('')
  const inputRef = useRef();

  const onChangeInput = (e) =>{
    setValue(e.target.value)
  }
  
  const onClickBtn = () => {
    if(value === ''){
      inputRef.current.focus()
      return;
    }
    onClickAddTodos(value)
    setValue('')
  }

  const onKeyDown = (e) =>{
    if(e.keyCode===13){
      onClickBtn()
    }
  }

  return(
    <div className='TodoEditor'>
    <div className="Editor">
      <input ref={inputRef} className="TodoEditor-input" value={value} onChange={onChangeInput} onKeyDown={onKeyDown} placeholder="오늘 뭐하지?..."/>
      <button className="TodoEditor-button" onClick={onClickBtn}>추가</button>
    </div>
    <hr className='hr'/>
    </div>
  )
}

export default React.memo(TodoEditor)