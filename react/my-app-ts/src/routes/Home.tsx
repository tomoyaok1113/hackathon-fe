import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body className='backgraoud'>
      <h1 className = 'App-header'>Unipos</h1>
      <div className ='login'>
        <Link to={`/login/`}>ログイン</Link>
      </div>
      <div className ='login'>
        <Link to={`/register/`}>新規登録</Link>
      </div>
    </body>
  );
};

export default Home;
export {};