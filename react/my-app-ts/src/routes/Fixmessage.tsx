import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState ,useEffect } from "react";

const Fixmessage = () =>{
  const fromname = sessionStorage.getItem("username");
  const messageid = sessionStorage.getItem("messageid");
  const fixname = sessionStorage.getItem("fixname");
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
  
  const onClickFix = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const result = await fetch("https://hackathon-be-em2dxrk3vq-uc.a.run.app/messagefix",
      {
        method: "POST",
        body: JSON.stringify({
          id:messageid,
          fixname:fixname,
          toName: toname,
          point: point,
          message: message,
        }),
      });
      if (!result.ok) {
        throw Error(`Failed to fix message: ${result.status}`);
      }
      window.location.href = "/fix/"
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>メッセージの編集</h1>
      <div className="Form">
        <form style={{ display: "flex", flexDirection: "column" }}>
          <p>From: {fromname}</p>
          <label>To: </label>
          <select name="toname" onChange={(e)=>setToName(e.target.value)}>
          <option value="/">選択してください</option>
          {users.map((user)=>(
          <option key={user.id} value={user.name}>{user.name}</option>
          ))}
          </select>
          <label>Point: (半角で入力)</label>
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
          <Button onClick={onClickFix} >更新</Button>
        </form>
      </div>  
      <div>
        <Link to={`/mypage/`} onClick={() => {sessionStorage.removeItem("messageid");sessionStorage.removeItem("fixname")}}>マイページに戻る</Link>
      </div>
    </>
  );
};
export default Fixmessage;
export {};



