import Lion from './assets/Lion.png';
import './Modal.css';

import { TodoContext } from './TodoContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export default function Modal() {
  const { t } = useTranslation();
  const { modalHandlder } = useContext(TodoContext);

  return (
    <div className="Modal-Container">
      <div className="Modal">
        <div className="Modal-Close">
          <button onClick={modalHandlder}>❌</button>
        </div>
        <div className="Modal-Content-1">
          <p>★☆{t('main.modal.title')}☆★</p>
        </div>
        <div className="Modal-Image">
          <img src={Lion} alt="개쩜" />
        </div>
        <div className="Modal-Content-2">
          <p>{t('main.modal.ment')}</p>
        </div>
      </div>
    </div>
  );
}
