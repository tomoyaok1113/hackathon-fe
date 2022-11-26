import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

type Submit = {
  id :string,
  toName : string,
  point :number,
  message : string,
};
const SubmitList = () =>{
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
            const data : Submit[] = Object.values(res);
            setSubmits(data)
          }
          fetchUser();
        } catch (err) {
          console.error(err);
        }
  },[]
  );
  
  const onClickDel = async (id :string,toname:string,point:number) => {
    try {
      const result = await fetch("https://hackathon-be-em2dxrk3vq-uc.a.run.app/messagedelete",
      {
        method: "POST",
        body: JSON.stringify({
          id:id,
          toName:toname,
          point:point
        }),
      });
      if (!result.ok) {
        throw Error(`Failed to delete : ${result.status}`);
      }
    } catch (err) {
      console.error(err);
    }

  };
  return (
        <div>
        <h1 className = 'App-header'>Unipos</h1>
        <h1>送信一覧</h1>
        <p>送り主,　ポイント,　メッセージ</p>
        <ul>
            {submits.map((submit) => {
                return <li className="List" key={submit.id}>
                  {submit.toName},　{submit.point},　{submit.message}
                  <Button href="/fixmessage/" onClick={() => {sessionStorage.setItem("messageid",submit.id);sessionStorage.setItem("fixname",submit.toName)}}>編集</Button>
                  <Button href="/delete/" onClick={() => onClickDel(submit.id,submit.toName,submit.point)}>削除</Button>
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