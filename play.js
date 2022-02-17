const { connect } = require("./client");
const { setupInput } = require("./input");


stdin.on("data", handleUserInput);


console.log("Connecting ...");


setupInput(connect());
