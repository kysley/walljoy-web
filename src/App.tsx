import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, useSearchParams} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {useRegisterMutation, useWallpapersQuery} from './graphql/gen';

interface AppProps {}

function Register() {
  useRegisterMutation();
  useSearchParams();
  return <div>register</div>;
}

function Home() {
  const [res] = useWallpapersQuery();
  return (
    <>
      {res.data?.wallpapers?.map((wp) => (
        <img
          src={wp?.u_url}
          alt={wp?.id}
          style={{width: '40vw', height: 'auto'}}
        />
      ))}
    </>
  );
}

function Header() {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);

  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
