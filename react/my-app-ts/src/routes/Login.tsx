import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';

const Login = () => {
  type User = {
    id :string,
    name : string,
    point : number,
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
  );;

  return (
    <div>
    <h1 className = 'App-header'>Unipos</h1>
    <h1>ユーザー選択</h1>

    {users.map((user)=>(
      <li className='element' key={user.id}>{user.name}
        <Button href="/mypage/" onClick={()=>{sessionStorage.setItem("username",user.name)}} >選択</Button>
      </li>
    ))}
    </div>
  )
}

export default Login;