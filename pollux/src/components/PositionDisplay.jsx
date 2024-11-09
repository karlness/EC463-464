import React from 'react';

const PositionDisplay = ({ path }) => {
  return (
    <div className="position-display">
      {path.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: point.x * 20,
            top: point.y * 20,
            width: '10px',
            height: '10px',
            backgroundColor: 'blue',
          }}
        ></div>
      ))}
    </div>
  );
};

export default PositionDisplay;

