import './TodoCheck.css'
import soGood from './assets/soGoodO.png'
import soSad from './assets/soSadX.png'

export default function TodoCheck(){
  return(
    <div className='TodoCheck'>
        <div className='TodoCheck-img'>
          <img src={soGood} alt='완료'/>
          <img src={soSad} alt='끝'/>
        </div>
        
        <div className='TodoCheck-p'>
          <p>완료 : 10개</p>
          <p>미완료 : 10개</p>
        </div>
      </div>
  )
}