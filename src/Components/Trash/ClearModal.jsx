import './ClearModal.css'

export default function ClearModal ({realClear,nuClear}){

  const onClicknuClear = () => {
    nuClear()
    realClear()
  }

  const onClickClear = () => {
    realClear()
  }
  return(
    <div className='ClearModal-Container'>
      <div className="ClearModal">
        <p>정말 휴지통을 비우시겠습니까?</p>
        <div className='ClearModal-Btn'>
          <button onClick={onClicknuClear}>예</button>
          <button onClick={onClickClear}>아니요</button>
        </div>
      </div>
    </div>
  )
}