import { useState } from 'react';
import Button from '../../Button/Button';
import JournalFormField from '../JournalFormField/JournalFormField';
import DeleteSvg from '@/assets/svg/delete.svg?react';
import CalendarSvg from '@/assets/svg/calendar.svg?react';
import FileSvg from '@/assets/svg/file.svg?react';
import styles from './JournalForm.module.scss';

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

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div className={styles['journal-form__head']}>
        <JournalFormField invalid={!formValidState['title']} wide={true}>
          <input
            name="title"
            type="text"
            placeholder="Заголовок"
          />
        </JournalFormField>

        <button type="button">
          <DeleteSvg />
        </button>
      </div>

      <div className={styles['journal-form__fields-box']}>
        <JournalFormField
          invalid={!formValidState['date']}
          icon={<CalendarSvg />}
          label="Дата"
        >
          <input name="date" type="date" />
        </JournalFormField>

        <JournalFormField icon={<FileSvg />} label="Метки">
          <input name="tag" type="text" />
        </JournalFormField>
      </div>

      <JournalFormField invalid={!formValidState['text']} grow={true}>
        <textarea name="text" placeholder="Моё воспоминание..." />
      </JournalFormField>

      <Button type="submit">Сохранить</Button>
    </form>
  );
}

export default JournalForm;
