import './TodoCheck.css';
import soGood from './assets/soGoodWink.png';
import soSad from './assets/soSadX.png';
import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useTranslation } from 'react-i18next';

export default function TodoCheck() {
  const { t } = useTranslation();
  const { isDone_O, isDone_X } = useContext(TodoContext);

  return (
    <div className="TodoCheck">
      <div className="TodoCheck-img">
        <img src={soGood} alt="완료" />
        <img src={soSad} alt="끝" />
      </div>

      <div className="TodoCheck-p">
        <p>
          {t('main.isDone.Completed')} : {isDone_O.length}
          {t('main.isDone.quantity')}
        </p>
        <p>
          {t('main.isDone.Incomplete')} : {isDone_X.length}
          {t('main.isDone.quantity')}
        </p>
      </div>
    </div>
  );
}
