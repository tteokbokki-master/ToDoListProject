import './ClearModal.css';
import { useTranslation } from 'react-i18next';

export default function ClearModal({ realClear, nuClear }) {
  const { t } = useTranslation();
  const onClicknuClear = () => {
    nuClear();
    realClear();
  };

  const onClickClear = () => {
    realClear();
  };
  return (
    <div className="ClearModal-Container">
      <div className="ClearModal">
        <p>{t('trash.modal.ment')}</p>
        <div className="ClearModal-Btn">
          <button onClick={onClicknuClear}>{t('trash.modal.yes')}</button>
          <button onClick={onClickClear}>{t('trash.modal.no')}</button>
        </div>
      </div>
    </div>
  );
}
