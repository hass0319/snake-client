const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  console.log("Connecting ...");

  const conn = net.createConnection({
    IP: 'localhost',// IP address,
    PORT: 50541,// PORT number,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //receiving data from server
  conn.on('data', (data) => {
  console.log(data);
})
  //when connection established
  conn.on('connect',() => {
    console.log("Successfully connected to game server");
    conn.write('Name: CIN');
    setTimeout(()=>{
      conn.write('Move: left');
      conn.write('Say: HAHA I\'m here');
    })
  });

  return conn;
};

connect();

module.exports = connect;