import { useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CardAddOrEdit from './components/CardAddOrEdit';
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { setLogin } from './features/auth/authSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';


function App() {

  const dispatch = useAppDispatch()
  const { loginJSON } = useAppSelector(state => state.auth)

  useEffect(() => {
    dispatch(setLogin(loginJSON))
  }, [dispatch, loginJSON])

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/add" element={<CardAddOrEdit />} />
          <Route path="/profile/edit/:id" element={<CardAddOrEdit />} />


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
