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