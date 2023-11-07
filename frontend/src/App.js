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
import UserAuth from './auth/UserAuth';
import UserProfile from './components/user/UserProfile';
import { Toaster } from 'react-hot-toast';
import UserProvider from './context/UserProvider';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <SnackbarProvider>
            <Toaster position="top-center" />
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />

              <Route path="main" element={<Main />}>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="navbar" element={<Navbar />} />
                <Route path="codebrowser" element={<CodeBrowser />} />
              </Route>
              <Route
                path="user"
                element={
                  <UserAuth>
                    <User />
                  </UserAuth>
                }
              >
                <Route path="generator" element={<CodeGenerator />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
            </Routes>
          </SnackbarProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
