import React from 'react';
import TrafficLight from './components/TrafficLight/TrafficLight'

const lights = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'green'},
]

function App() {
  return (
    <div className="App">
      <TrafficLight lights={lights}/>
    </div>
  );
}

export default App;
