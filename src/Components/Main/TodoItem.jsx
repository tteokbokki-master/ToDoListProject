import './TodoItem.css'
export default function TodoItem({id,isDone,content}){

  return(
    <div className="TodoItem">
      <input id={`TodoItem-checkbox`} checked={isDone}type='checkbox'/>
      <label htmlFor={`TodoItem-checkbox`}/>
      <p className='TodoItem-content'>{content}</p>
      <button className='TodoItem-EdiBtn'>수정</button>
      <button className='TodoItem-DelBtn'>삭제</button>
    </div>
  )
}