import React from 'react';
import ReactDOM from 'react-dom/client';
import SSHConsole from '../../components/terminal/terminal';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  // Verwenden Sie eine Typzusicherung, um sicherzustellen, dass rootElement nicht null ist.
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <SSHConsole />
    </React.StrictMode>
  );
} else {
  console.error('Das Wurzelelement wurde nicht gefunden.');
}
