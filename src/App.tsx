import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {global} from '@stitches/react';

import {Feed} from './pages/feed';
import {Collection} from './pages/Collection';

interface AppProps {}

const globalStyles = global({
  '*': {margin: 0, padding: 0, boxSizing: 'border-box'},
  html: {
    maxWidth: '100vw',
  },
});
globalStyles();

function App({}: AppProps) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/c/:collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
