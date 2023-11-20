import './TodoItem.css'
export default function TodoItem({id,isDone,content,onClickCheckBox}){

  const onChangeCheckBox = () =>{
    onClickCheckBox(id)
    console.log(id)
    console.log(content)
  }
  
  return(
    <div className="TodoItem">
      <input onChange={onChangeCheckBox} id={`TodoItem-checkbox-${id}`} checked={isDone}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox-${id}`}/>
      <p className='TodoItem-content'>{content}</p>
      <button className='TodoItem-EdiBtn'>수정</button>
      <button className='TodoItem-DelBtn'>삭제</button>
    </div>
  )
}