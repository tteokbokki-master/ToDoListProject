import './TrashMainItem.css'

export default function TrashMainItem({content,id,deleteTrash}){

  const onClickDelete = () =>{
    deleteTrash(id)
  }
  
  return(
    <div className='TrashMainItem'>
      <div className='TrashMainItem-Content'>
        <p>{content}</p>
      </div>
      <div className='TrashMainItem-Btn'>
        <button className='TrashMainItem-Btn1'>복구</button>
        <button className='TrashMainItem-Btn2' onClick={onClickDelete}>지우기</button>
      </div>
    </div>
  )
}