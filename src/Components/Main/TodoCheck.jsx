import './TodoCheck.css'
import soGood from './assets/soGoodWink.png'
import soSad from './assets/soSadX.png'
import { useContext } from 'react'
import { TodoContext } from './TodoContext'

export default function TodoCheck(){
  
  const {isDone_O,isDone_X} = useContext(TodoContext);

  return(
    <div className='TodoCheck'>
        <div className='TodoCheck-img'>
          <img src={soGood} alt='완료'/>
          <img src={soSad} alt='끝'/>
        </div>
        
        <div className='TodoCheck-p'>
          <p>완료 : {isDone_O.length}개</p>
          <p>미완료 : {isDone_X.length}개</p>
        </div>
      </div>
  )
}