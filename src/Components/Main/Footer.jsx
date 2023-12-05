import { TodoContext } from "./TodoContext"
import { useContext } from "react"
import { useNavigate } from "react-router"
import './Footer.css'
import fish from './assets/fish.png'
import trash from './assets/trash.png'

export default function Footer(){
  const {modalHandlder,isDone_O,isDone_X,modalCount} = useContext(TodoContext);

  const nav = useNavigate();
  const goToTrash = () =>{
    nav('/trash')
  }

  return(
    <div className="Footer-container">
      <div className='Footer'>
        {isDone_O.length >=1 && isDone_X.length === 0 ? !modalCount ?
        <button className='Footer-Btn' onClick={modalHandlder}>
          <img src={fish} className="Footer-Btn1-img" alt='done'/>
        </button> 
        : <div></div>
        : <div></div>}
        
        <button className='Footer-Btn' onClick={goToTrash}>
          <img src={trash} className="Footer-Btn2-img" alt='쓰레기통' />
        </button>
      </div>
    </div>
  )
}

