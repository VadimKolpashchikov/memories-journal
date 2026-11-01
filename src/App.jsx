import JournalList from './components/journal/JournalList/JournalList';
import JournalAddButton from './components/journal/JournalAddButton/JournalAddButton';
import Body from './components//layouts/Body/Body';
import LeftPanel from './components//layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalForm from './components/journal/JournalForm/JournalForm';
import './styles/App.scss';
import { getSortItemsByDate } from './helpers/date';
import { useStorage } from './hooks/useStorage.hook';
import { MEMORIES_KEY } from './const/storage';

const sortItems = getSortItemsByDate();

function App() {
  const [memories, setMemories] = useStorage(MEMORIES_KEY);

  const addItem = (item) => {
    setMemories((prev) => [...prev, {
      ...item,
      id: Math.max(0, ...prev.map(({ id }) => id)) + 1,
      date: item.date,
    }]
      .sort(sortItems));
  };

  const removeItem = (itemId) => {
    setMemories((prev) => prev.filter(({ id }) => id !== itemId));
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={memories} />
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} onRemoveItem={removeItem} />
      </Body>
    </div>
  );
}

export default App;
