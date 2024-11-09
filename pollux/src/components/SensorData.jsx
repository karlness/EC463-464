import React from 'react';

const SensorData = ({ sensors }) => {
  return (
    <div className="sensor-data">
      <h3>Data</h3>
      <ul>
        {Object.keys(sensors).map((sensor) => (
          <li key={sensor}>
            {sensor}: {sensors[sensor]} inch/es
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SensorData;

