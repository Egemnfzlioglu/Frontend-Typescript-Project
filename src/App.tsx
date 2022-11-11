import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CardAdd from './components/CardAdd';
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
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
          <Route path="/profile/add" element={<CardAdd />} />
          <Route path="/profile/edit/:id" element={<CardAdd />} />



        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
