const port = 3050;
const io = require("socket.io")(port);

console.log("Server running on port " + port);

io.on("connection", function(socket) { //event handler

    console.log("User Connected");

    socket.on("message", function(data) {
        console.log("Message Received");
        console.log(data);
    })
})