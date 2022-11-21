import { Link } from "react-router-dom";

const ReceiveList = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>受信一覧</h1>
      <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default ReceiveList;
export {};