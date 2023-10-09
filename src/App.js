import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './style.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Analytic } from './components/Analytic';
import { Explore } from './components/Explore';
import { Shop } from './components/Shop';
import { Inbox } from './components/Inbox';
import { Setting } from './components/Setting';
import { Help } from './components/Help';
import { Amazon } from './components/Amazon';
import { Invinity } from './components/Invinity';

function App() {
  return (
    <>
      <Router>
        <div className="body">
          <div className="container">
            <div className="division">
              <Sidebar/>
              <div className='header-main-wrapper'>
                <Header/>
                <Routes>
                  <Route exact path="/" element={<Main />} />
                  <Route exact path="/analytic" element={<Analytic/>} />
                  <Route exact path="/Explore" element={<Explore/>} />
                  <Route exact path="/shop" element={<Shop/>} />
                  <Route exact path="/inbox" element={<Inbox/>} />
                  <Route exact path="/setting" element={<Setting/>} />
                  <Route exact path="/help" element={<Help/>} />
                  <Route exact path="/amazon" element={<Amazon/>} />
                  <Route exact path="/invinity" element={<Invinity/>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
