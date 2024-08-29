import { TodoContext } from './TodoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import './Footer.css';
import fish from './assets/fish.png';
import trash from './assets/trash.png';
import i18n from '../../translation/i18n';

export default function Footer() {
  const { modalHandlder, isDone_O, isDone_X, modalCount, setLanguage, language } = useContext(TodoContext);

  const nav = useNavigate();
  const goToTrash = () => {
    nav('/trash');
  };
  const changeLangauge = lang => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="Footer-container">
      <div className="Footer">
        {isDone_O.length >= 1 && isDone_X.length === 0 ? (
          !modalCount ? (
            <button className="Footer-Btn" onClick={modalHandlder}>
              <img src={fish} className="Footer-Btn1-img" alt="done" />
            </button>
          ) : (
            <div></div>
          )
        ) : (
          <div></div>
        )}
        <button className="Footer-Btn" onClick={goToTrash}>
          <img src={trash} className="Footer-Btn2-img" alt="쓰레기통" />
        </button>
        <select id="select" value={language} onChange={e => changeLangauge(e.target.value)}>
          <option value="ko">한국어</option>
          <option value="en">영어</option>
        </select>
      </div>
    </div>
  );
}
