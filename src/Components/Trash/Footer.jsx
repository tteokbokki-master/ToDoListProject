import './Footer.css';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Footer({ realClear }) {
  const { t } = useTranslation();
  const nav = useNavigate();
  const goToHome = () => {
    nav('/');
  };
  // const onClickClear = () => {
  //   nuClear()
  // }
  return (
    <div className="Footer">
      <div className="Footer-Btn">
        <button onClick={realClear}>{t('trash.button.clear')}</button>
        <button onClick={goToHome}>{t('trash.button.home')}</button>
      </div>
    </div>
  );
}
