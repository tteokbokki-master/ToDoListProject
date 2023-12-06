import './TrashMain.css'
import TrashMainItem from './TrashMainItem'
export default function TrashMain({trash}){
  return(
    <div className='TrashMain'>
      {
        trash.map((tra)=>
        <TrashMainItem key={tra.id} {...tra}/>)
      }

    </div>
  )
}