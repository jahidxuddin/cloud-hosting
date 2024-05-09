const { Client } = require('ssh2');
const app = require("express");

const sshMiddleware = (req, res, next) => {
  const conn = new Client();
  conn.on('ready', () => {
    console.log('Client :: ready');
    // Führen Sie hier Aktionen aus, z.B. Befehle ausführen oder SFTP starten
  }).connect({
    host: 'my.remote.server',
    port: 22,
    username: 'meinBenutzername',
    privateKey: require('fs').readFileSync('/path/to/my/key')
  });
  
  req.sshConn = conn;
  next();
};

app.use(sshMiddleware);
