import './Header.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return (
    <div className="Header">
      <p>{t('main.header.title')}</p>
      <p>
        {year}
        {t('main.header.year')} {month}
        {t('main.header.month')} {day}
        {t('main.header.day')}
      </p>
    </div>
  );
}
export default React.memo(Header);
