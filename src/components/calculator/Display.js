import React from 'react';

function Display({ displayObj }) {
  return (
    <div className="display__area">
      <p className="disp__result">
        {displayObj.next ? displayObj.next : displayObj.total}
      </p>
    </div>
  );
}

export default Display;
