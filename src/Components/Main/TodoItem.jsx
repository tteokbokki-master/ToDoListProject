import './TodoItem.css'
export default function TodoItem(){

  return(
    <div className="TodoItem">
      <input className="TodoItem-checkbox" type='checkbox'/>
      <p className='TodoItem-content'>오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음  오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음  오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 오늘은 공부하기 싫음 싫음 </p>
      <button className='TodoItem-EdiBtn'>수정</button>
      <button className='TodoItem-DelBtn'>삭제</button>
    </div>
  )
}