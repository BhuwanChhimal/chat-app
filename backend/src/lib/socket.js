import {Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        
    }
})

export function getReceiverSocketId(userId){
    return userSocketMap[userId]
}

//used to store online users //{userId:socketId}
const userSocketMap = {

}

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    const userId = socket.handshake.query.userId
    if(userId) userSocketMap[userId] = socket.id

    //uesd to send events to all connected clients
    io.emit("get_online_users",Object.keys(userSocketMap))

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);

        delete userSocketMap[userId]
    io.emit("get_online_users",Object.keys(userSocketMap))

    });
})

export {io,app,server}