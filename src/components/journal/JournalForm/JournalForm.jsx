import { useState } from 'react';
import Button from '../../Button/Button';
import DeleteSvg from '@/assets/svg/delete.svg?react';
import styles from './JournalForm.module.scss';
import cn from 'classnames';

function JournalForm({ onAddItem }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    text: true,
  });

  const validate = (formData) => {
    const state = { ...formValidState };

    state.title = !!formData.title.trim();
    state.text = !!formData.text.trim();
    state.date = !!formData.date;

    setFormValidState(state);
    return Object.values(state).every((val) => val);
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const isValid = validate(data);

    if (isValid) {
      onAddItem(data);
      e.target.reset();
    }
  };
  const getValidationClassName = (fieldName) => cn(
    { [styles.invalid]: !formValidState[fieldName] },
  );

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          name="title"
          type="text"
          className={getValidationClassName('title')}
        />
        <button type="button">
          <DeleteSvg />
        </button>
      </div>

      <label>
        <input
          name="date"
          type="date"
          className={getValidationClassName('date')}
        />
      </label>

      <label>
        <input name="tag" type="text" />
      </label>

      <textarea
        name="text"
        id="memory-content"
        placeholder="Моё воспоминание..."
        className={getValidationClassName('text')}
      />

      <Button type="submit">
        Сохранить
      </Button>
    </form>
  );
}

export default JournalForm;
