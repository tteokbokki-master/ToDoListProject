import './Home.css'
import Header from '../Components/Main/Header'
import TodoEditor from '../Components/Main/TodoEditor'
import TodoList from '../Components/Main/TodoList'
import TodoCheck from '../Components/Main/TodoCheck'
import Footer from '../Components/Main/Footer'
import Modal from '../Components/Main/Modal'
import { useState,useEffect,useRef, useMemo} from 'react'
import { TodoContext } from '../Components/Main/TodoContext'

export default function Home(){

  const dragItem = useRef();
  const dragEnterItem = useRef();

  const localTodos = window.localStorage.getItem("todos")
  ? JSON.parse(window.localStorage.getItem("todos"))
  : []; //
  
  const [todos,setTodos]= useState(localTodos);
  
  useEffect(()=>{
    window.localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const [idCount,setIdCount] = useState(0);

  useEffect(()=>{
    const countingStar = todos.map((todo)=>{
      return todo.id
    })
    const countValue = Math.max(...countingStar) === -Infinity ? -1 : Math.max(...countingStar);
    setIdCount(countValue+1)
  },[todos])

  const {isDone_O, isDone_X} = useMemo(()=>{
    const isDone_O = todos.filter((todo)=>{
      return todo.isDone != false
    })
    const isDone_X = todos.filter((todo)=>{
      return todo.isDone != true
    })
    return {
      isDone_O,
      isDone_X,
    }
  },[todos])
  

  const onClickCheckBox = (currentId) =>{
    setTodos(todos.map((todo)=>todo.id === currentId ? {...todo, isDone: !todo.isDone} : todo))
  }

  const onClickDeleteTodo = (currentId) => {
    setTodos(todos.filter((todo)=> todo.id != currentId))
  }

  const onEditTodo = (currentId,currentContent) => {
    setTodos(todos.map((todo)=> todo.id === currentId ? {...todo, content : currentContent} : todo))
  }

  const onClickAddTodos = (content) =>{
    const data = {
      id : idCount,
      isDone : false,
      content : content,
    }
    setTodos([...todos,data])
  }

  const onDragStart = (idx) => {
    dragItem.current = idx;
  }
  const onDragEnter = (idx) => {
    dragEnterItem.current = idx;
  }
  
  const onDragEnd = () => {
    const newTodos = [...todos]
    const dragCurrentItem = newTodos[dragItem.current];
    newTodos.splice(dragItem.current,1);
    newTodos.splice(dragEnterItem.current,0,dragCurrentItem);
    dragItem.current = null;
    dragEnterItem.current = null;
    setTodos(newTodos)
  }

  const [modalCount, setModalCount] = useState(false)

  const modalHandlder = () =>{
    setModalCount(!modalCount)
  }
  
  return(
    <div className="Home">
      <Header/>
      <TodoContext.Provider value={{
        modalHandlder,onClickAddTodos,isDone_O,isDone_X,todos,onClickCheckBox,
        onClickDeleteTodo,onEditTodo,onDragStart,onDragEnter,onDragEnd,modalCount
      }}>
        { modalCount ? <Modal/> : ''}
        <TodoEditor/>
        <TodoCheck/>
        <TodoList/>
        <Footer/>
      </TodoContext.Provider>

      {/* <div className='Home-Footer'>
        {isDone_O.length >=1 && isDone_X.length === 0 ? 
        !modalCount ?
        <button className='Home-Footer-End' onClick={modalHandlder}>끝!</button> 
        : <div></div>
        : <div></div>}
      </div> */}
    </div>
  )
}