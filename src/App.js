import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './component/MainPage';
import Login from './component/Login';

function App() {
  return (
      <Routes>
        <Route path="/*" element={<MainPage />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
  );
}

export default App;
