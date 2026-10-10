import './JournalList.scss';
import CardButton from '@/components/CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({ items = [] }) {
  return (
    <div className="journal-list">
      {
        items.map((el) => (
          <CardButton key={el.id}>
            <JournalItem data={el} />
          </CardButton>
        ))
      }

      {
        !items.length && (
          <div className="journal-list__empty-state">
            <h4>Список пустой</h4>
            <p>Добавьте своё первое воспоминание</p>
          </div>
        )
      }
    </div>
  );
}

export default JournalList;
