import { useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CardAddOrEdit from './components/CardAddOrEdit';
import Profile from './pages/Profile';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { setLogin } from './features/auth/authSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';


function App() {

  const dispatch = useAppDispatch()
  const { loginJSON, user } = useAppSelector(state => state.auth)

  useEffect(() => {

    if (loginJSON) {
      dispatch(setLogin(loginJSON))
    }
  }, [dispatch, loginJSON])



  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          {
            user?.result._id ? (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/add" element={<CardAddOrEdit />} />
                <Route path="/profile/edit/:id" element={<CardAddOrEdit />} />
                <Route path="*" element={<NotFound />} />

              </>
            ) : (
              <>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/*" element={<Login />} />

              </>
            )

          }


        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
