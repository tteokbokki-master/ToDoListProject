import './Footer.css'
import { useNavigate } from 'react-router'

export default function Footer(){
  const nav = useNavigate();
  const goToHome = () =>{
    nav('/')
  }
  return(
    <div className='Footer'>
      <div className='Footer-Btn'>
        <button>초기화</button>
        <button onClick={goToHome}>홈으로</button>
      </div>
    </div>
  )
}