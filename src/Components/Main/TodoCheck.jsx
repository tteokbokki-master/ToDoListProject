import './TodoCheck.css'

export default function TodoCheck(){
  return(
    <div className='TodoCheck'>
      <div className="TodoCheck-All">
        <img alt='전체'/>
        <p>0개</p>
      </div>
      <div className='TodoCheck-Ok'>
        <img alt='완료'/>
        <p>0개</p>
      </div>
      <div className="TodoCheck-Notyet">
        <img alt='끝'/>
        <p>0개</p>
      </div>
    </div>
  )
}