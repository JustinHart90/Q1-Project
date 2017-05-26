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

// function getTime() {
//   var rawDate = String(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
//   var slimDate = rawDate.substring(0, " ")
//   return slimDate;
// }

setInterval(clock, 1000)
