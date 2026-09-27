import './JournalItem.scss';
import { formatter } from '@/helpers/date';

function JournalItem({ data: { title, text, date } }) {
  const formattedDate = date instanceof Date ? formatter.format(date) : date;

  return (
    <div className="journal-item">
      <h2 className="journal-item__title">{title}</h2>
      <div className="journal-item__body">
        <p className="journal-item__date">{formattedDate}</p>
        <p className="journal-item__text">{text}</p>
      </div>
    </div>
  );
}

export default JournalItem;
