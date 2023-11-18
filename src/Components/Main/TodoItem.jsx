import './TodoItem.css'
export default function TodoItem({id}){

  return(
    <div className="TodoItem">
      <input id={`TodoItem-checkbox-${id}`}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox-${id}`}/>
      <p className='TodoItem-content'>예시</p>
      <button className='TodoItem-EdiBtn'>수정</button>
      <button className='TodoItem-DelBtn'>삭제</button>
    </div>
  )
}