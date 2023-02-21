import { useState } from 'react';
import './styles.css'

function App() {

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200);
  const [randomNum, setRandomNum] = useState(5);

  const handleClick = () => {
    setRandomNum(Math.floor(Math.random()*(maxValue-minValue + 1) +minValue ))
  }

  return (
    <div className="app">
      <div className='container'>
        <div className='randomNum'>
          <p>Random Number : <span>{randomNum}</span> </p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Min: </p>
            <input type="number" value={minValue} onChange={e=> setMinValue(+e.target.value)}  />
          </div>
          <div>
            <p>Max: </p>
            <input type="number" value={maxValue} onChange={e=> setMaxValue(+e.target.value)} />
          </div>
        </div>
        <button onClick={handleClick}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
