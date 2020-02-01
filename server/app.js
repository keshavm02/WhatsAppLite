const port = 3050;
const io = require("socket.io")(3050);

console.log("Server running on port " + port);

io.on("connection", function() { //event handler

    console.log("User Connected");

    socket.on("message", function() {
        console.log("Message Received");
    })
})