import React from "react";
import {useState} from "react";

const Form =() =>{

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  
  const onSubmit = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter name");
      return;
    }
    if (!age) {
      alert("Please enter age");
      return;
    }
    if (name.length > 50) {
      alert("Please enter a name shorter than 50 characters");
      return;
    }
    if (age < 20 || age > 80) {
      alert("Please enter age between 20 and 80");
      return;
    }
    try {
      const result = await fetch("https://hackathon-be-em2dxrk3vq-uc.a.run.app:8000/user", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          age: age,
        }),
      });
      if (!result.ok) {
        throw Error(`Failed to create user: ${result.status}`);
      }

      setName("");
      setAge(0);
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
        <label>Age: </label>
        <input
          type={"number"}
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        ></input>
        <button onClick={onSubmit}>POST</button>
      </form>
    </div>   
  );
}
export default Form;
