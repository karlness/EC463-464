import React from 'react';

const SensorData = ({ sensors }) => {
  return (
    <div className="sensor-data">
      <h3>Data</h3>
      <ul>
        {Object.entries(sensors).map(([sensorName, sensorValue]) => {
          // If it's the "CLIFF" sensor, we interpret true/false => Yes/No
          if (sensorName === 'CLIFF') {
            return (
              <li key={sensorName}>
                {sensorName}: {sensorValue ? 'Yes' : 'No'}
              </li>
            );
          }
          // Otherwise display numeric reading
          return (
            <li key={sensorName}>
              {sensorName}: {sensorValue} inch/es
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SensorData;


