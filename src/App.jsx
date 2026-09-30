import JournalList from './components/journal/JournalList/JournalList';
import JournalAddButton from './components/journal/JournalAddButton/JournalAddButton';
import Body from './components//layouts/Body/Body';
import LeftPanel from './components//layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalForm from './components/journal/JournalForm/JournalForm';
import './styles/App.scss';

function App() {
  const data = [
    { title: 'Title', text: 'Text', date: new Date() },
    { title: 'Title1', text: 'Text1', date: new Date() },
    { title: 'Title2', text: 'Text2', date: new Date() },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={data} />
      </LeftPanel>

      <Body>
        <JournalForm />
      </Body>
    </div>
  );
}

export default App;
