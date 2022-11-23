import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import React from "react";
import { useState,useEffect } from "react";

const Submit = () => {
    const fromname = sessionStorage.getItem("username");
    const [toname, setToName] = useState <string> ("");
    const [point, setPoint] = useState <number> (0);
    const [message,setMessage ] = useState <string> ("");

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

    const onSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!point) {
          alert("ポイントを入力してください");
          return;
        }
        if (!message) {
          alert("メッセージを入力してください");
          return;
        }
        if (fromname == toname){
          alert("送り先は自分以外にしてください。");
          return;
        }   
        try {
          const result = await fetch("https://hackathon-be-em2dxrk3vq-uc.a.run.app/message",
          {
            method: "POST",
            body: JSON.stringify({
              fromName: fromname,
              toName: toname,
              point: point,
              message: message
            }),
          });
          console.log(fromname,toname,point,message)
          if (!result.ok) {
            throw Error(`Failed to create message: ${result.status}`);
          }
          window.location.href = "/confirm/"
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>貢献を送る</h1>
      <div className="Form">
        <form style={{ display: "flex", flexDirection: "column" }}>
          <p>From: {fromname}</p>
          <label>To: </label>
          <select name="toname" onChange={(e)=>setToName(e.target.value)}>
          {users.map((user)=>(
          <option key={user.id} value={user.name}>{user.name}</option>
          ))}
          </select>
          <label>Point: </label>
          <input
            type={"number"}
            value={point}
            onChange={(e) => setPoint(e.target.valueAsNumber)}
          ></input>
          <label>Message: </label>
          <input
            type={"message"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
          <Button onClick={onSubmit} >送信</Button>
        </form>
      </div>  
      <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default Submit;
export {};

   
