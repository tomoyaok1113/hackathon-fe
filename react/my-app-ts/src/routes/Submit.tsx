import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>貢献を送る</h1>
      <div>
        <Link to={`/confirm/`}>確認</Link>
      </div>
      <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default Submit;
export {};