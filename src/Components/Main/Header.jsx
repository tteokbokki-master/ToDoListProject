import './Header.css'
export default function Header(){

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

// 날짜와 시간이 나와야함.
// 애니메이션을 배워서, 투두리스트 글씨가 서서히 연파란색으로 변하도록(?)