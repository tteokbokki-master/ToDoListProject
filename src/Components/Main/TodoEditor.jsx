import { useState } from 'react'
import './TodoEditor.css'
export default function TodoEditor({onClickAddTodos}){

  const [value, setValue] = useState('')
  const onChangeInput = (e) =>{
    setValue(e.target.value)
  }
  
  const onClickBtn = () => {
    onClickAddTodos(value)
    setValue('')
  }

  return(
    <div className='TodoEditor'>
    <div className="Editor">
      <input className="TodoEditor-input" value={value} onChange={onChangeInput}placeholder="오늘 뭐하지?.."/>
      <button className="TodoEditor-button" onClick={onClickBtn}>추가</button>
    </div>
    <hr className='hr'/>
    </div>
  )
}