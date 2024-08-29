import './Header.css';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="Header">
      <p>{t('trash.header.title')}</p>
    </div>
  );
}
