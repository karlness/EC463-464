import React, { useState } from 'react';
import PositionDisplay from './components/PositionDisplay';
import SensorData from './components/SensorData';
import ControlPanel from './components/ControlPanel';
import BatteryIndicator from './components/BatteryIndicator';

const App = () => {
  const [path, setPath] = useState([]);

  // Example sensor data, with cliff detection as boolean
  const [sensors, setSensors] = useState({
    FRONT: 30,
    RIGHT: 10,
    LEFT: 5,
    CLIFF: false, // false = no, true = yes
  });

  const [batteryLevel, setBatteryLevel] = useState(75);

  const startNavigation = () => {
    console.log('Starting navigation...');
    //dynamically update CLIFF detection here
    
  };

  const stopNavigation = () => {
    console.log('Stopping navigation...');
  };

  const resetPath = () => {
    setPath([]);
    console.log('Path reset.');
  };

  return (
    <div className="App">
      <header className="header">
        {/*display battery or cliff detection here */}
      </header>
      
      <div className="content">
        <h2 className="title">Pollux Navigation</h2>

        <SensorData sensors={sensors} />
        <BatteryIndicator level={batteryLevel} />

        <ControlPanel
          onStart={startNavigation}
          onStop={stopNavigation}
          onReset={resetPath}
        />
        
        <PositionDisplay path={path} />
      </div>
    </div>
  );
};

export default App;