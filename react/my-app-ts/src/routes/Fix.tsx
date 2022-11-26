import { Link } from "react-router-dom";

const Fix = () => {
  return (
    <>
      <h1 className = 'App-header'>Unipos</h1>
      <h1>更新しました。</h1>
      <div>
        <Link to={`/mypage/`} onClick={() => {sessionStorage.removeItem("messageid");sessionStorage.removeItem("fixname")}}>マイページに戻る</Link>
      </div>
    </>
  );
};

export default Fix;
export {};