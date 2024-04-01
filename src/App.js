import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './component/MainPage';
import Login from './component/Login';
import Dashboard from "./component/Dashboard";
import Team from "./component/Team";
import MainContent from "./component/MainContent";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<MainPage />}/>
        <Route path="login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="team" element={<Team/>}/>
          <Route path="main" element={<MainContent/>}/>
        </Route>
      </Routes>
  );
}

export default App;
