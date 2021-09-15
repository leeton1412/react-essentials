import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  home,
  about,
  events,
  contact
} from "./pages"

// https://api.github.com/users/leeton1412

function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect (() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(Response => Response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading.....</h1>;
  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;

  return <div>
      <img alt={data.login} src={data.avatar_url}/>
      <h1>{data.login}</h1>
      <button>{data.repos_url}</button>
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/about" element={<about />} />
      <Route path="/events" element={<events />} />
      <Route path="/contact" element={<contact />} />
      </Routes>
      </div>
}

export default App;
