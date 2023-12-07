import './TrashMainItem.css'

export default function TrashMainItem({content,id,deleteTrash,comeBackHome}){

  const onClickDelete = () =>{
    deleteTrash(id)
  }
  
  const onClickComeBack = () => {
    comeBackHome(id)
  }
  return(
    <div className='TrashMainItem'>
      <div className='TrashMainItem-Content'>
        <p>{content}</p>
      </div>
      <div className='TrashMainItem-Btn'>
        <button className='TrashMainItem-Btn1' onClick={onClickComeBack}>복구</button>
        <button className='TrashMainItem-Btn2' onClick={onClickDelete}>지우기</button>
      </div>
    </div>
  )
}