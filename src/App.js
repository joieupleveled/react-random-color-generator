import './App.css';
// import { getByDisplayValue } from '@testing-library/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  return (
    <div
      className="generated"
      style={{
        width: 600,
        height: 200,
        fontSize: 10,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        color: 'white',
        backgroundColor: color,
      }}
    >
      Generated Color: {color}
      <div>
        <button
          onClick={() => {
            setColor(randomColor);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
