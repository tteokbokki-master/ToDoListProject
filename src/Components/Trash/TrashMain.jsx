import './TrashMain.css'
import TrashMainItem from './TrashMainItem'
export default function TrashMain({trash,deleteTrash,comeBackHome}){
  return(
    <div className='TrashMain'>
      {
        trash.map((tra)=>
        <TrashMainItem key={tra.id} deleteTrash={deleteTrash} comeBackHome={comeBackHome} {...tra}/>)
      }

    </div>
  )
}