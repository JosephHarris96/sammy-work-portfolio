import './App.css';
import Header from './components/Header/Header.jsx';
import Work from '../src/components/Work/Work';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="work-container">
        <Work />
      </div>
    </div>
  );
}

export default App;