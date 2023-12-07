import './Trash.css'
import Header from '../Components/Trash/Header'
import TrashMain from '../Components/Trash/TrashMain'
import Footer from '../Components/Trash/Footer'
import { useState,useEffect} from 'react'
import ClearModal from '../Components/Trash/ClearModal'
export default function Trash(){

  const localTrash= window.localStorage.getItem("trash")
  ? JSON.parse(window.localStorage.getItem("trash"))
  : []; 

  const localTodos= window.localStorage.getItem("todos")
  ? JSON.parse(window.localStorage.getItem("todos"))
  : []; 
  
  const [trash, setTrash] = useState(localTrash);
  const [todos, setTodos] = useState(localTodos);

  const deleteTrash = (currentId) =>{
    setTrash(trash.filter((tra)=>{
      return tra.id != currentId
    })) 
  }

  const comeBackHome = (currentId) =>{
    const backTodos = trash.filter((tra)=> {
      return tra.id === currentId
    })
    setTrash(trash.filter((tra)=>{
      return tra.id != currentId
    })) 
    setTodos([...todos, backTodos[0]]);
  }

  const nuClear = () => {
    setTrash([]);
  }
  const [clear, setClear] = useState(false);

  const realClear = () =>{
    setClear(!clear)
  }

  useEffect(()=>{
    window.localStorage.setItem("trash",JSON.stringify(trash))
    window.localStorage.setItem("todos",JSON.stringify(todos))
  },[trash][todos])

  return(
  <div className='Trash'>
    <Header/>
    {clear ? <ClearModal nuClear={nuClear} realClear={realClear} /> : ''}
    <TrashMain trash={trash} deleteTrash={deleteTrash} comeBackHome={comeBackHome}/>
    <Footer nuClear={nuClear} realClear={realClear}/>
  </div>
  )
}

