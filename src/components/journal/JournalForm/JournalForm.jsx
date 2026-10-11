import { useState } from 'react';
import Button from '../../Button/Button';
import './JournalForm.scss';

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
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        name="title"
        type="text"
        className={!formValidState.title ? 'invalid' : ''}
      />

      <input
        name="date"
        type="date"
        className={!formValidState.date ? 'invalid' : ''}
      />

      <input name="tag" type="text" />

      <textarea
        name="text"
        id="memory-content"
        placeholder="Моё воспоминание..."
        className={!formValidState.text ? 'invalid' : ''}
      />

      <Button type="submit">
        Сохранить
      </Button>
    </form>
  );
}

export default JournalForm;
