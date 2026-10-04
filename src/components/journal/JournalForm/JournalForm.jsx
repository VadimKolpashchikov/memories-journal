import Button from '../../Button/Button';
import './JournalForm.scss';

function JournalForm({ onAddItem }) {
  const addJournalItem = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    onAddItem(data);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input name="title" type="text" />

      <input name="date" type="date" />

      <input name="tag" type="text" />

      <textarea name="text" id="memory-content" />

      <Button type="submit">
        Сохранить
      </Button>
    </form>
  );
}

export default JournalForm;
