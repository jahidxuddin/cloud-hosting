import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const SSHConsole: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (terminalRef.current) {
      const term = new Terminal();
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(terminalRef.current);
      fitAddon.fit();

      socketRef.current = new WebSocket('wss://deine-domain.de/ws');

      socketRef.current.onmessage = event => {
        term.write(event.data);
      };

      term.onData(data => {
        socketRef.current?.send(data);
      });

      socketRef.current.onclose = event => {
        if (event.wasClean) {
          term.write('\\r\\nVerbindung wurde sauber geschlossen');
        } else {
          term.write('\\r\\nVerbindungsabbruch');
        }
      };

      socketRef.current.onerror = error => {
        term.write(`\\r\\nWebSocket-Fehler: ${error}`);
      };
    }

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return (
    <div id="terminal" ref={terminalRef} style={{ width: '100%', height: '100vh' }} />
  );
};

export default SSHConsole;
