import './BaseLayout.css'

export default function BaseLayout({children}){

  return(
    <div className='Container'>
    <div className="BaseLayout">
      {children}
    </div>
    </div>
  )
}