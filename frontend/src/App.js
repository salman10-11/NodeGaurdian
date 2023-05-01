import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Signup from './components/main/Signup';
import Navbar from './components/main/Navbar';
import User from './components/user';
import CodeGenerator from './components/user/CodeGenerator';
import CodeBrowser from './components/main/CodeBrowser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="main" element={<Main />} >
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="navbar" element={<Navbar />} />
           <Route path="codebrowser" element={<CodeBrowser />} />
          </Route>
          <Route path="user" element={<User />} >
           <Route path="codegenerator" element={<CodeGenerator />} />
            
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
