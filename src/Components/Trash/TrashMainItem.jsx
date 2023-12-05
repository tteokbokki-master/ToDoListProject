import './TrashMainItem.css'

export default function TrashMainItem(){

  return(
    <div className='TrashMainItem'>
      <div className='TrashMainItem-Content'>
        <p>안녕 난 쓰레기통이야</p>
      </div>
      <div className='TrashMainItem-Btn'>
        <button className='TrashMainItem-Btn1' >복구</button>
        <button className='TrashMainItem-Btn2'>지우기</button>
      </div>
    </div>
  )
}