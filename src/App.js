import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Name from './components/Name';
import Related from './components/Related';

function App() {
  return (
    <div className=''>
      <Header/>
      <div className='px-72'>
        <Name />
        <Main />
        <Related/>
      </div>
    </div>
  );
}

export default App;
