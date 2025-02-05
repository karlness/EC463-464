

  import React from 'react';
import './BatteryIndicator.css';

const BatteryIndicator = ({ level = 100 }) => {
  // Constrain battery level between 0 and 100
  const batteryLevel = Math.max(0, Math.min(level, 100));

  // Example color logic:
  // - Green above 60
  // - Yellow between 30 and 60
  // - Red below 30
  let fillColor = '#4caf50'; // green
  if (batteryLevel < 60 && batteryLevel >= 30) {
    fillColor = '#ffeb3b'; // yellow
  } else if (batteryLevel < 30) {
    fillColor = '#f44336'; // red
  }

  return (
    <div className="battery-indicator">
      <div className="battery-body">
        <div
          className="battery-level"
          style={{
            width: `${batteryLevel}%`,
            backgroundColor: fillColor
          }}
        />
      </div>
      <div className="battery-cap" />
      <span className="battery-text">{batteryLevel}%</span>
    </div>
  );
};

export default BatteryIndicator;