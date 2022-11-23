import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

type Submit = {
  id :string,
  toName : string,
  point :number,
  message : string,
};
const SubmitList = () => {
  const [submits, setSubmits] = useState <Submit[]> ([]);
    useEffect(() => {
        try{
          const fetchUser = async() => {
            const fromname = sessionStorage.getItem("username");
            const response = await fetch(
                "https://hackathon-be-em2dxrk3vq-uc.a.run.app/messagesub?fromname=" + fromname,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const res = await response.json();
            const data : Submit[] = Object.values(res)
            setSubmits(data)
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
        <h1>送信一覧</h1>
        <ul>
            {submits.map((submit) => {
                return <li className="List" key={submit.id}>
                    {submit.toName},{submit.point},
                </li>;
            })}
        </ul>
        <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
        </div>
        </div>
        );
};

export default SubmitList;
export {};