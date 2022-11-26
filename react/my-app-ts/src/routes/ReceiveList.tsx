import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Receive = {
  id :string,
  fromName : string,
  point :number,
  message : string,
};
const ReceiveList = () => {
  const [receives, setReceive] = useState <Receive[]> ([]);
    useEffect(() => {
        try{
          const fetchUser = async() => {
            const toname = sessionStorage.getItem("username");
            const url = "https://hackathon-be-em2dxrk3vq-uc.a.run.app/message?toname=" + toname;
            const response = await fetch(url,
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
        <p>送信先,　ポイント,　メッセージ</p>
        <ul>
            {receives.map((receive) => {
                return <li className="List" key={receive.id}>
                    {receive.fromName},　{receive.point},　{receive.message}
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