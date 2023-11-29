import Lion from './assets/Lion.png'
import './Modal.css'

export default function Modal() {

  return (
    <div className="Modal">
      <div className="Modal-Close">
        <button>❌</button>
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
  )
}
