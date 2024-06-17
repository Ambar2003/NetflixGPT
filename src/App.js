import './App.css';
import Browse from './components/Browse';
import Login from './components/Login';
import Header from './components/Header';
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
function App() {
  return (
      <Provider store = {appStore}>
      <Body></Body>
      </Provider>
  );
}

export default App;
