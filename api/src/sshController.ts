import express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import * as ssh2 from 'ssh2';

const app = express();
const server: http.Server = new http.Server(app);
const io: socketIo.Server = new socketIo.Server(server);
const ssh: ssh2.Client = new ssh2.Client();

app.get('/', (req: express.Request, res: express.Response) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: socketIo.Socket) => {
  const conn: ssh2.Client = new ssh();
  conn.on('ready', () => {
    socket.emit('data', '\r\n*** SSH CONNECTION ESTABLISHED ***\r\n');
    conn.shell((err: any, stream: ssh2.ClientChannel) => {
      if (err) return socket.emit('data', '\r\n*** SSH SHELL ERROR: ' + err.message + ' ***\r\n');
      socket.on('data', (data: any) => {
        stream.write(data);
      });
      stream.on('data', (d: any) => {
        socket.emit('data', d.toString('binary'));
      }).on('close', () => {
        conn.end();
      });
    });
  }).connect({
    host: '',
    port: 22,
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
  });
});

server.listen(3000);