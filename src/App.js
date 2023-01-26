import './App.css';
import { NewsItem } from './components/NewsItem';
import Hello from './Hello/Hello'

function App() {
  return (
    <div className="App">
        <Hello greeting="World" />
        <Hello greeting="Class!!!!!!~" />

        <NewsItem />
    </div>
  );
}

export default App;
