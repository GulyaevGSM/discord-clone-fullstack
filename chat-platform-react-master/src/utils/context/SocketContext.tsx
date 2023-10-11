import { createContext } from 'react';
import { io } from 'socket.io-client';

export const socket = io('http://localhost:9001', {
  withCredentials: true,
});

socket.on("connect", () => {
  console.log("User was connected: ID_USER: ", socket.id);
});

export const SocketContext = createContext(socket);
