import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState()
  const getUser = async() => {}
  useEffect(()=> {
    axios.get('http://jsonplaceholder.typicode.com/users')
  },[])
  return <div className="App">Hello Travel App!</div>;
}

export default App;
