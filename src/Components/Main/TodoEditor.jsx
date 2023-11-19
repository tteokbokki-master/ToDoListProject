import './TodoEditor.css'
export default function TodoEditor(){

  return(
    <div className='TodoEditor'>
    <div className="Editor">
      <input className="TodoEditor-input" placeholder="오늘 뭐하지?.."/>
      <button className="TodoEditor-button">추가</button>
    </div>
    <hr className='hr'/>
    </div>
  )
}