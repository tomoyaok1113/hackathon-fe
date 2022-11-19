import "./App.css";
import { useState, useEffect } from "react";
import Form from './Form'
import UserList from './UserList'

export type User={
  id :string;
  name : string ;
  age :number ;
};

function App() {
  const [users, setUsers] = useState <User[]> ([]);

  useEffect(() => {
    try{
      const fetchUser = async() => {
        const response = await fetch(
          "http://localhost:8000/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
        const data : User[] = Object.values(res)
        setUsers(data)
      }
      fetchUser();
    } catch (err) {
      console.error(err);
    }
  },[]
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Register!!</h1>
      </header>  
        <Form/>
        <UserList users={users}/>
    </div>
  );
}

export default App;
