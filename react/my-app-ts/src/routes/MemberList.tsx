import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export type User = {
    id :string;
    name : string ;
    point :number ;
  };

const MemberList = () => {
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
        <div>
        <h1 className = 'App-header'>Unipos</h1>
        <h1>メンバーリスト</h1>
        <ul>
            {users.map((user) => {
                return <li className="List" key={user.id}>
                    {user.name},{user.point}
                </li>;
            })}
        </ul>
        <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
        </div>
        </div>
        );
};

export default MemberList;
export {};