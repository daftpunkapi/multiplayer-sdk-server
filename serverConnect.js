// Initialization of Node.js server connection
import io from 'socket.io-client';
export const createClient = io.connect("http://localhost:3001");