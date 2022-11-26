import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

type Point = {
  point :number,
};

const username = sessionStorage.getItem("username");

const Mypage = () => {
  const [point, setPoint] = useState<Point[]>([]);
  useEffect(() => {
    try{
      const fetchPoint = async() => {
        const response = await fetch(
          "https://hackathon-be-em2dxrk3vq-uc.a.run.app/point?username=" + username,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const res = await response.json();
        const data : Point[]= Object.values(res);
        setPoint(data)
      }
      fetchPoint();
    } catch (err) {
        console.error(err);
    }
  },[]
  );
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>マイページ</h1>
      <h2>ユーザー名：{username}</h2>
      {point.map((point) => {
                return <h2 className="List" key={point.point}>
                    貢献ポイント：{point.point} points
                </h2>;
            })}
      <div className='element'>    
      <div>
        <Link to={`/submit/`}>貢献を送る</Link>
      </div>
      <div>
        <Link to={`/memberlist/`}>メンバーリスト</Link>
      </div>
      <div>
        <Link to={`/receivelist/`}>受信一覧</Link>
      </div>
      <div>
        <Link to={`/submitlist/`}>送信一覧</Link>
      </div>
      <div>
        <Link to={`/`} onClick={sessionStorage.clear}>ログアウト</Link>
      </div>
      </div>
    </>
  );
};

export default Mypage;
export {};