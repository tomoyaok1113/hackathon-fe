import { Link } from "react-router-dom";

const Delete = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>削除しました。</h1>
      <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default Delete;
export {};