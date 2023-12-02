import Lion from './assets/Lion.png'
import './Modal.css'

import { TodoContext } from './TodoContext'
import { useContext } from 'react'

export default function Modal() {

  const {modalHandlder} = useContext(TodoContext);

  return (
    <div className='Modal-Container'>
    <div className="Modal">
      <div className="Modal-Close">
        <button onClick={modalHandlder}>❌</button>
      </div>
      <div className="Modal-Content-1">
        <p>★☆성 장☆★</p>
      </div>
      <div className="Modal-Image">
        <img src={Lion} alt='개쩜'/> 
      </div>
      <div className="Modal-Content-2">
        <p>할 일 완료!</p>
      </div>
    </div>
    </div>
  )
}



