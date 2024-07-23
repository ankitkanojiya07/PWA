const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store active users
let activeUsers = {};

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle new user joining
  socket.on('join', (username) => {
    socket.username = username;
    activeUsers[socket.id] = username;
    io.emit('userList', Object.values(activeUsers));
  });

  // Handle text editor changes
  socket.on('textChange', (data) => {
    socket.broadcast.emit('textChange', data); // Broadcast changes to other users
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    delete activeUsers[socket.id];
    io.emit('userList', Object.values(activeUsers));
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
