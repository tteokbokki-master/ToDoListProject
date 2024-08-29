import './TrashMainItem.css';
import { useTranslation } from 'react-i18next';

export default function TrashMainItem({ content, id, deleteTrash, comeBackHome }) {
  const { t } = useTranslation();
  const onClickDelete = () => {
    deleteTrash(id);
  };

  const onClickComeBack = () => {
    comeBackHome(id);
  };
  return (
    <div className="TrashMainItem">
      <div className="TrashMainItem-Content">
        <p>{content}</p>
      </div>
      <div className="TrashMainItem-Btn">
        <button className="TrashMainItem-Btn1" onClick={onClickComeBack}>
          {t('trash.button.Restore')}
        </button>
        <button className="TrashMainItem-Btn2" onClick={onClickDelete}>
          {t('trash.button.Delete')}
        </button>
      </div>
    </div>
  );
}
