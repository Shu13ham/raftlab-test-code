import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="division">
          <Sidebar/>
          <div className='header-main-wrapper'>
            <Header/>
            <Main/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
