import './Home.css'
import Header from '../Components/Main/Header'
import TodoEditor from '../Components/Main/TodoEditor'
import TodoList from '../Components/Main/TodoList'
import TodoCheck from '../Components/Main/TodoCheck'
import Modal from '../Components/Main/Modal'
import { useState,useEffect,useRef} from 'react'

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
    const data = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : 0
    const dataLength = Object.keys(data).length;
    const countValue = data[dataLength-1] === undefined ? -1 : data[dataLength-1].id
    setIdCount(countValue+1)
  },[todos])


  const isDone_O = todos.filter((todo)=>{
    return todo.isDone != false
  })
  const isDone_X = todos.filter((todo)=>{
    return todo.isDone != true
  })

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
      { modalCount ? <Modal modalHandlder={modalHandlder}/> : ''}
      <TodoEditor onClickAddTodos={onClickAddTodos}/>
      <TodoCheck isDone_O={isDone_O} isDone_X={isDone_X}/>
      <TodoList todos={todos} onClickCheckBox={onClickCheckBox} onClickDeleteTodo={onClickDeleteTodo} onEditTodo={onEditTodo} onDragStart={onDragStart} onDragEnter={onDragEnter} onDragEnd ={onDragEnd}/>
      <div className='Home-Footer'>
        {isDone_O.length >=1 && isDone_X.length === 0 ? <button className='Home-Footer-End' onClick={modalHandlder}>끝!</button> : <div></div>}
        {modalCount ? <div></div> : <button className='Home-Footer-trash'>휴지통</button>}
      </div>
    </div>
  )
}