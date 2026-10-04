import JournalList from './components/journal/JournalList/JournalList';
import JournalAddButton from './components/journal/JournalAddButton/JournalAddButton';
import Body from './components//layouts/Body/Body';
import LeftPanel from './components//layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalForm from './components/journal/JournalForm/JournalForm';
import './styles/App.scss';
import { useState } from 'react';

const INITIAL_DATA = [
  {
    title: 'Title',
    text: 'Text',
    date: new Date(),
  },
  {
    title: 'Title1',
    text: 'Text1',
    date: new Date(),
  },
  {
    title: 'Title2',
    text: 'Text2',
    date: new Date(),
  },
];

function App() {
  const [memories, setMemories] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setMemories((prev) => [{
      ...item,
      date: new Date(item.date),
    }, ...prev]);
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
