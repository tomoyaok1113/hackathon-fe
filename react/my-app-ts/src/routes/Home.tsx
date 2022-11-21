import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className = 'App-header'>Unipos</h1>
      <div>
        <Link to={`/login/`}>ログイン</Link>
      </div>
      <div>
        <Link to={`/register/`}>登録</Link>
      </div>
      <div>
        <Link to={`/mypage/`}>マイページ</Link>
      </div>
    </div>
  );
};

export default Home;
export {};