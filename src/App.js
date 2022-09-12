import './App.css';
import nodeColor from 'kuler';
import logo from './logo.svg';

function App() {
  const [color, setColor] = useState(nodeColor.random().color);

  return (
    <div>
      <h1>Random Color Generator</h1>;
    </div>
  );
}

export defautl App;
