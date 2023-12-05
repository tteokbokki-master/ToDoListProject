import './Trash.css'
import Header from '../Components/Trash/Header'
import TrashMain from '../Components/Trash/TrashMain'
import Footer from '../Components/Trash/Footer'

export default function Trash(){
  return(
  <div className='Trash'>
    <Header/>
    <TrashMain/>
    <Footer/>
  </div>
  )
}

