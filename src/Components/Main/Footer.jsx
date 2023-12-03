import { TodoContext } from "./TodoContext"
import { useContext } from "react"
import './Footer.css'

export default function Footer(){
  const {modalHandlder,isDone_O,isDone_X,modalCount} = useContext(TodoContext);
  return(
    <div className="Footer-container">
    <div className='Footer'>
      {isDone_O.length >=1 && isDone_X.length === 0 ? !modalCount ?
      <button className='Home-Footer-End' onClick={modalHandlder}>끝!</button> 
      : <div></div>
      : <div></div>}
    </div>
    </div>
  )
}

