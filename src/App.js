import './App.css';
import Temmie from './Temmie';
import Temmie1 from './Temmie1';
import Temmie2 from './Temmie2';
import Temmie3 from './Temmie3';
import Temmie4 from './Temmie4';
import Bob from './Bob';
import Bobi from './Bobi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='all'>
          <div className='emp'>
            <div className='serch'>
              
            </div>
            <div>
              <Temmie/>
            </div>
            <div>
              <Temmie1/>
            </div>
            <div>
              <Temmie2/>
            </div>
            <div>
              <Temmie3/>
            </div>
            <div>
              <Temmie4/>
            </div>
            <div>
              <Bob/>
            </div>
          </div>
          <div className='sel'>
            <Bobi/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
