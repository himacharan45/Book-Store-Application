import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Home from './components/Home';
import Books from './components/Books';
import AddBook from './components/AddBook';
import AllBooks from './components/AllBooks';
import UpdateDelete from './components/UpdateDelete';
import axios from 'axios';

const access_token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Login' element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/AddBook" element={<AddBook/>} /> 
          <Route path="/AllBooks" element={<AllBooks/>} />
          <Route path="/UpdateDelete" element={<UpdateDelete/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
