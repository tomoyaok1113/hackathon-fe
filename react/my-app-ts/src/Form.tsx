import React, {useState} from "react";

const Form :React.FC = () => {
  const [age, setAge] = useState(0);
  const onSubmit = async (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ev.preventDefault();
    const response = await fetch(
      "https://react1-5-2-default-rtdb.firebaseio.com/tweets",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    type Data = {
      [key: string]:{
        age: number;
        email: string;
        name: string;
      }
    }
    const data :Data = await response.json();
    const result = Object.values(data).filter((v) => v.name === "okadatomoya")[0];
    setAge(result.age+10);
  };  
  return (
    <form style={{ display: "flex", flexDirection: "column" }} > 
      <label>Age: </label>
      <input
        type={"number"}
        style={{ marginBottom: 20 }}
        value={age}
      ></input>
      <button onClick={onSubmit}> Submit</button>
    </form>  
  );
};

export default Form;
