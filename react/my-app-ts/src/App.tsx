
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Mypage from "./routes/Mypage"
import Submit from "./routes/Submit"
import Confirm from "./routes/Confirm"
import MemberList from "./routes/MemberList"
import ReceiveList from "./routes/ReceiveList"
import SubmitList from "./routes/SubmitList"
import Delete from "./routes/Delete"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/mypage/`} element={<Mypage />} />
        <Route path={`/submit/`} element={<Submit />} />
        <Route path={`/confirm/`} element={<Confirm />} />
        <Route path={`/memberlist/`} element={<MemberList />} />
        <Route path={`/receivelist/`} element={<ReceiveList />} />
        <Route path={`/submitlist/`} element={<SubmitList />} />
        <Route path={`/delete/`} element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;