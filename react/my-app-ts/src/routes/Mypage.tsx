import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>マイページ</h1>
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
        <Link to={`/`}>ログアウト</Link>
      </div>
    </>
  );
};

export default Mypage;
export {};