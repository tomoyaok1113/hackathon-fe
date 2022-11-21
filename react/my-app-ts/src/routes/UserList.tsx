import { useState, useEffect } from "react";

type User = {
    id: string;
    name:string;
    point:number;
}

const UserList = () => {
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
        <ul>
            {users.map((user) => {
                return <li className="List" key={user.id}>
                    {user.name},{user.point}
                </li>;
            })}
        </ul>
    );
}

export default UserList;