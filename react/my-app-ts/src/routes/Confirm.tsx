import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>送信しました。</h1>
      <div>
        <Link to={`/mypage/`}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default Confirm;
export {};