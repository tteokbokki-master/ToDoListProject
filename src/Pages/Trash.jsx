import './Trash.css'
import Header from '../Components/Trash/Header'
import TrashMain from '../Components/Trash/TrashMain'
import Footer from '../Components/Trash/Footer'
import { useState,useEffect} from 'react'
export default function Trash(){

  const localTrash= window.localStorage.getItem("trash")
  ? JSON.parse(window.localStorage.getItem("trash"))
  : []; 
  
  const [trash, setTrash] = useState(localTrash);

  const deleteTrash = (currentId) =>{
    setTrash(trash.filter((tra)=>{
      return tra.id != currentId
    })) 
  }

  const nuClear = () => {
    setTrash([]);
  }

  



  useEffect(()=>{
    window.localStorage.setItem("trash",JSON.stringify(trash))
  },[trash])


  return(
  <div className='Trash'>
    <Header/>
    <TrashMain trash={trash} deleteTrash={deleteTrash}/>
    <Footer nuClear={nuClear}/>
  </div>
  )
}

