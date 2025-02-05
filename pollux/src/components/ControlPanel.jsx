import React from 'react';

const ControlPanel = ({ onStart, onStop, onReset }) => {
  return (
    <div className="control-panel">
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ControlPanel;