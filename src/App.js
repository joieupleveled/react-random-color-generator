import './App.css';
import { getByDisplayValue } from '@testing-library/react';
import randomColor from 'randomcolor';
import { useState } from 'react';
import logo from './logo.svg';

function App() {
  const [color, setColor] = useState('');

  return (
    <div>
      <div
        style={{
          margin: '0 auto',
          display: 'flex',
          justifycontent: 'center',
          alignItems: 'center',
          fontSize: 30,
          border: '1px solid',
        }}
      >
        <h1>Random Color Generator</h1>;
      </div>

      <button
        onClick={() => setColor(randomColor())}
        style={{
          backgroundColor: color,
          margin: '0 auto',
          display: 'flex',
          justifycontent: 'center',
          alignItems: 'center',
          fontSize: 100,
          border: '10px solid',
        }}
      >
        Guess the next color 😏
      </button>
    </div>
  );
}

export default App;
