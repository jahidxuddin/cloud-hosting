import React from 'react';
import ReactDOM from 'react-dom/client';
import SSHConsole from '../../components/terminal/terminal';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    </ SSHConsole>
  </React.StrictMode>
);

