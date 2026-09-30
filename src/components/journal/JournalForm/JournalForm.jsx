import { useState } from 'react';
import Button from '../../Button/Button';
import './JournalForm.scss';

function JournalForm() {
  const [inputData, setInputData] = useState('');

  const inputOnChange = (e) => {
    console.log(e);

    setInputData(e.target.value);
  };

  const addJournalItem = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input name="title" type="text" />

      <input name="date" type="date" />

      <input
        name="tag"
        type="text"
        value={inputData}
        onChange={inputOnChange}
      />

      <textarea name="content" id="memory-content"></textarea>

      <Button type="submit">Сохранить</Button>
    </form>
  );
}

export default JournalForm;
