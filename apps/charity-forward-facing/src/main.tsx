import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './mocks/handlers';
// if (process.env['NODE_ENV'] === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
// import { worker } from './mocks/browser';
// worker.start();
// }

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
