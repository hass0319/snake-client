const setupInput = require('./input')

let connection;

const setupInput = function () {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
stdin.on("data", handleUserInput);

setupInput(connect());

const handleUserInput = function(input) {
  if (input === 'w') connection.write('Move: up');
  if (input === 'a') connection.write('Move: left');
  if (input === 's') connection.write('Move: down');
  if (input === 'd') connection.write('Move: right');
  if (input === 'm') connection.write('Say: MOVE');
  if (input === '\u0003' || input === 'x') process.exit();
};

module.exports = setupInput;