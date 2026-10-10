import JournalList from './components/journal/JournalList/JournalList';
import JournalAddButton from './components/journal/JournalAddButton/JournalAddButton';
import Body from './components//layouts/Body/Body';
import LeftPanel from './components//layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalForm from './components/journal/JournalForm/JournalForm';
import './styles/App.scss';
import { useState } from 'react';
import { getSortItemsByDate } from './helpers/date';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Title',
    text: 'Text',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Title1',
    text: 'Text1',
    date: new Date(),
  },
  {
    id: 3,
    title: 'Title2',
    text: 'Text2',
    date: new Date(),
  },
];

const sortItems = getSortItemsByDate();

function App() {
  const [memories, setMemories] = useState(INITIAL_DATA.sort(sortItems));

  const addItem = (item) => {
    setMemories((prev) => [
      ...prev,
      {
        ...item,
        id: Math.max(0, ...prev.map(({ id }) => id)) + 1,
        date: new Date(item.date),
      },
    ].sort(sortItems));
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={memories} />
      </LeftPanel>

      <Body>
        <JournalForm onAddItem={addItem} />
      </Body>
    </div>
  );
}

export default App;
