import CardButton from '@/components/CardButton/CardButton';
import PluseSvg from '@/assets/svg/pluse.svg?react';
import './JournalAddButton.scss';

function JournalAddButton() {
  return (
    <CardButton className="journal-add-button">
      <PluseSvg />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
