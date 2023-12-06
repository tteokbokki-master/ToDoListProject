import { useState } from 'react';
import './Footer.css'
import { useNavigate } from 'react-router'

export default function Footer(){
  const [clear, setClear] = useState(false);

  const realClear = () =>{
    setClear(!clear)
  }

  const nav = useNavigate();
  const goToHome = () =>{
    nav('/')
  }
  // const onClickClear = () => {
  //   nuClear()
  // }
  return(
    <div className='Footer'>
      <div className='Footer-Btn'>
        // clear ? 모달 : ''
        <button onClick={realClear}>초기화</button>
        <button onClick={goToHome}>홈으로</button>
      </div>
    </div>
  )
}