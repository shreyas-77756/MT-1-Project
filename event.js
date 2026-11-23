const fs = require('fs');

console.log('1. Start (Main Thread)');

// Outside I/O cycle (Main Module)
setTimeout(() => {
  console.log('3. setTimeout (Top-level)');
}, 0);

setImmediate(() => {
  console.log('4. setImmediate (Top-level)');
});

// Inside I/O cycle (Poll Phase -> Check Phase -> Timers Phase)
fs.readFile(__filename, () => {
  console.log('5. Inside fs.readFile I/O Callback (Poll Phase)');

  setTimeout(() => {
    console.log('7. setTimeout inside I/O (Timers Phase - Next Iteration)');
  }, 0);

  setImmediate(() => {
    console.log('6. setImmediate inside I/O (Check Phase - Runs First)');
  });
});

console.log('2. End (Main Thread)');