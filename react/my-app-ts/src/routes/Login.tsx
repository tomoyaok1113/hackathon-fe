import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { NONAME } from 'dns';

const Login = (props:any) => {
  type User = {
    Id :string,
    Name: string,
    Point: number,
  }
  const [users, setUsers] = useState <User[]> ([]);
  useEffect(() => {
    try{
      const fetchUser = async() => {
        const response = await fetch(
          "https://hackathon-be-em2dxrk3vq-uc.a.run.app/user",
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
    <div>
    <h1 className = 'App-header'>ユーザー選択</h1>
    {users.map((u)=>(
      <div key={u.Id}>
      <form>
      <Button href="myPage" id={u.Id} >{u.Name},{u.Point}</Button>
      </form>
      </div>
    ))}
    </div>
  )
}

export default Login;