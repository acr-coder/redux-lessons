import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Elma from './components/Elma'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Elma/>
        </Provider>
       
      </header>
    </div>
  );
}

export default App;
