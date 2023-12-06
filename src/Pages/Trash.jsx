import './Trash.css'
import Header from '../Components/Trash/Header'
import TrashMain from '../Components/Trash/TrashMain'
import Footer from '../Components/Trash/Footer'
import { useState } from 'react'
export default function Trash(){
  const localTrash= window.localStorage.getItem("trash")
  ? JSON.parse(window.localStorage.getItem("trash"))
  : []; 
  
  const [trash, setTrash] = useState(localTrash);
  
  return(
  <div className='Trash'>
    <Header/>
    <TrashMain trash={trash}/>
    <Footer/>
  </div>
  )
}

