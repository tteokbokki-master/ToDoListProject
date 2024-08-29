import { useState, useRef } from 'react';
import './TodoItem.css';
import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { useTranslation } from 'react-i18next';

export default function TodoItem({ id, idx, isDone, content }) {
  const { t } = useTranslation();
  const { onClickCheckBox, onClickDeleteTodo, onEditTodo, onDragStart, onDragEnter, onDragEnd } =
    useContext(TodoContext);

  const TodoItem_content = isDone ? 'TodoItem_content_true' : 'TodoItem_content_false';

  const [onOff, setOnOFF] = useState(false);
  const [newTodo, setNewTodo] = useState(content);
  const inputRef = useRef();

  const onChangeCheckBox = () => {
    if (onOff === false) {
      onClickCheckBox(id);
    }
  };
  const onClickDelete = () => {
    onClickDeleteTodo(id);
  };

  const onClickonOff = () => {
    setOnOFF(!onOff);
  };

  const onClickEditBtn = () => {
    if (newTodo === '') {
      inputRef.current.focus();
      return;
    }
    onEditTodo(id, newTodo);
    onClickonOff();
  };

  const onChangeEditTodo = e => {
    setNewTodo(e.target.value);
  };

  const onKeyDownEnter = e => {
    if (newTodo != '' && e.keyCode === 13) {
      onClickEditBtn();
      onClickonOff();
    }
  };
  return (
    <div
      className="TodoItem"
      draggable
      onDragStart={() => {
        onDragStart(idx);
      }}
      onDragEnter={() => {
        onDragEnter(idx);
      }}
      onDragEnd={() => {
        onDragEnd();
      }}
    >
      <input onChange={onChangeCheckBox} id={`TodoItem-checkbox-${id}`} checked={isDone} type="checkbox" />

      {isDone === false && onOff ? (
        <div className="trueItem">
          <input
            ref={inputRef}
            value={newTodo}
            onKeyDown={onKeyDownEnter}
            className="TodoItem-input"
            onChange={onChangeEditTodo}
            placeholder={content}
          />
          <div className="btn">
            <button className="TodoItem-EdiBtn" onClick={onClickEditBtn}>
              {t('main.button.done')}
            </button>
            <button className="TodoItem-DelBtn" onClick={onClickonOff}>
              {t('main.button.close')}
            </button>
          </div>
        </div>
      ) : (
        <>
          <label htmlFor={`TodoItem-checkbox-${id}`} />
          <div className="falseItem">
            <p className={TodoItem_content}>{content}</p>
            <button className="TodoItem-EdiBtn-1" onClick={onClickonOff}>
              {t('main.button.edit')}
            </button>
            <button className="TodoItem-DelBtn-1" onClick={onClickDelete}>
              {t('main.button.del')}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
