import CardButton from '@/components/CardButton/CardButton';
import './JournalAddButton.scss';

function JournalAddButton() {
  return (
    <CardButton className="journal-add-button">
      <img src="/svg/pluse.svg" alt="add memory" />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
