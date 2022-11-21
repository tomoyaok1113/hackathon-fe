import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import React from "react";
import {useState} from "react";

const UserForm =() =>{

  const [name, setName] = useState("");
  
  const onSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter name");
      return;
    }
    if (name.length > 50) {
      alert("Please enter a name shorter than 50 characters");
      return;
    }
    try {
      const result = await fetch("https://hackathon-be-em2dxrk3vq-uc.a.run.app/user", {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }
      setName("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Form">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Name: </label>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input> 
        <Button href="/Mypage" onClick={onSubmit}>登録</Button>
      </form>
    </div>   
  );
}
export default UserForm;