import './JournalList.scss';
import CardButton from '@/components/CardButton/CardButton.jsx';
import JournalItem from '../JournalItem/JournalItem.jsx';

function JournalList({ items = [] }) {
  return (
    <div className="journal-list">
      {items.map((el, idx) => (
        <CardButton key={idx}>
          <JournalItem data={el} />
        </CardButton>
      ))}
    </div>
  );
}

export default JournalList;
