import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Name from './components/Name';
import Related from './components/Related';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className=''>
      <Header/>
      <div className='px-72'>
        <Name />
        <Main />
        <Related/>
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
