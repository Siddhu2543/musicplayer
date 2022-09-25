/* // Default Code Snippet
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

/* // Setup Tutorial Code
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const url = "http://localhost:5000/api/users/"

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get(url)
    const result = await res.data
    setUsers(result)
    // const res = await fetch(url, {mode: 'cors'})
    // const users_list = await res.json()
    // setUsers(users_list)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    </div>
  )
}

export default App */

// Project Code
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

const url = "http://localhost:5000/api/users/"

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get(url)
    const result = await res.data
    setUsers(result)
    // const res = await fetch(url, {mode: 'cors'})
    // const users_list = await res.json()
    // setUsers(users_list)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      <h1> Project Started Hello </h1>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    </div>
  )
}

export default App