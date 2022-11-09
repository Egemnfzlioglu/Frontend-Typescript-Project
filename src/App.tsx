import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Login from './component/Login';
import Register from './component/Register';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />



        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
