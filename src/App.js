import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Layout from './component/Layout';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state)=>state.profile.token);

  const loginRoute = (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<Login/>} />
    </Routes>
  )
  
  return (
    <>
    <ToastContainer/>
      {
       token ?
        <>
          <Layout/>
        </>
        :
        loginRoute
     }
    </>
  );

  
}

export default App;
