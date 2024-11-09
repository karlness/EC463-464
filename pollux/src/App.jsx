import React, { useState } from 'react';
import PositionDisplay from './components/PositionDisplay';
import SensorData from './components/SensorData';
import ControlPanel from './components/ControlPanel';

const App = () => {
  const [path, setPath] = useState([]);
  const [sensors, setSensors] = useState({
    FRONT: 30, //for demo purposes 
    //LEFTs: 20,
    RIGHT: 10,
    LEFT: 5,
  });

  const startNavigation = () => {
    console.log('Starting navigation...');
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
        {/* Header is intentionally left empty */}
      </header>
      <div className="content">
        <h2 className="title">Pollux Navigation</h2>
        <SensorData sensors={sensors} />
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










