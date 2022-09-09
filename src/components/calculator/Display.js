import React from 'react';

function Display({ display }) {
  return (
    <div className="display__area">
      <p className="disp__result">
        {display.next ? display.next : display.total}
      </p>
    </div>
  );
}

export default Display;
