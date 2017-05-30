import React from 'react';
import ReactDOM from 'react-dom';

function clock() {
  const element = (
    <div>
      <h2 id="clock-text">{new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h2>
    </div>
  )

  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(clock, 1000)
