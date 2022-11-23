import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Receive = {
  id :string;
  toname : string ;
  point :number ;
  message : string;
};
const ReceiveList = () => {
  const [receives, setReceive] = useState <Receive[]> ([]);
    useEffect(() => {
        try{
          const fetchUser = async() => {
            const response = await fetch(
                "https://hackathon-be-em2dxrk3vq-uc.a.run.app/message",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const res = await response.json();
            const data : Receive[] = Object.values(res)
            setReceive(data)
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
        <h1>受信一覧</h1>
        <ul>
            {receives.map((receive) => {
                return <li className="List" key={receive.id}>
                    {receive.toname},{receive.point},
                </li>;
            })}
        </ul>
        <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
        </div>
        </div>
        );
};

export default ReceiveList;
export {};