import ColorCard from './components/ColorCard';
import './App.scss';
import { useState } from "react"

function App() {

  const [isOn, setIsOn] = useState(false);

  function startHandle() {
    setIsOn=(true);
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardWrapper">
          <ColorCard color="green"> </ColorCard>
          <ColorCard color="red"> </ColorCard>
          <ColorCard color="blue"> </ColorCard>
          <ColorCard color="yellow"> </ColorCard>
        </div>
          <button onClick={startHandle} className="startButton">Start</button>
      </header>
    </div>
  );
}

export default App;
