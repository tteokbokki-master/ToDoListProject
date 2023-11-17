import './Home.css'
import Header from '../Components/Main/Header'
import TodoEditor from '../Components/Main/TodoEditor'
import TodoList from '../Components/Main/TodoList'
import TodoCheck from '../Components/Main/TodoCheck'

export default function Home(){

  return(
    <div className="Home">
      <Header/>
      <TodoCheck/>
      <TodoEditor/>
      <TodoList/>
    </div>

  )
}