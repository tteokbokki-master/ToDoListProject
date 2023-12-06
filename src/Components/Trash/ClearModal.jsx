import './ClearModal.css'

export default function ClearModal (){
  return(
    <div className='ClearModal-Container'>
      <div className="ClearModal">
        <p>ㄹㅇ 초기화 하시겠습니까?</p>
        <div className='ClearModal-Btn'>
          <button>예</button>
          <button>아니요</button>
        </div>
      </div>
    </div>
  )
}