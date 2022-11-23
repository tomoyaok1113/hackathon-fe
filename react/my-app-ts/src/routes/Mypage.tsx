import { Link } from "react-router-dom";

const Mypage = () => {
  const username = sessionStorage.getItem("username")
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>マイページ</h1>
      <h2>ユーザー：{username}</h2>
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
    </>
  );
};

export default Mypage;
export {};