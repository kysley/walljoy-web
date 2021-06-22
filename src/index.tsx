import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as UrqlProvider} from 'urql';

import App from './App';
import {urqlClient} from './utils';

ReactDOM.render(
  <React.StrictMode>
    <UrqlProvider value={urqlClient}>
      <App />
    </UrqlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
