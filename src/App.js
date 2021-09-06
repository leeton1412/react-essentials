import './App.css';
import React, {useState, useEffect} from 'react';

// https://api.github.com/users/leeton1412

function App({login}) {
  const [data, setData] = useState(null);

  useEffect (() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(Response => Response.json())
    .then(setData);
  }, [])

  if (data){
    return <div>{JSON.stringify(data)}</div>
  }
  return (
    <div>
      No Data
    </div>
  )
}

export default App;
