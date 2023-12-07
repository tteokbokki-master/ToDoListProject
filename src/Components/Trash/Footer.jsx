import './Footer.css'
import { useNavigate } from 'react-router'

export default function Footer({realClear}){

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
        <button onClick={realClear}>비우기</button>
        <button onClick={goToHome}>홈으로</button>
      </div>
    </div>
  )
}