import './Header.css'
import React from 'react'

function Header(){

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()+1
  const day = today.getDate()

  return(
    <div className="Header">
      <p>투두리스트</p>
      <p>{year}년 {month}월 {day}일</p>
    </div>
  )
}
export default React.memo(Header);