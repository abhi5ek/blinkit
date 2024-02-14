import './App.css';
import {
       BrowserRouter as Router,
       Route,
       Routes,
       Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import UploadImg from './components/UploadImg';
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/uploadimg" element={<UploadImg/>}/>
      <Route exact path="/home" element={<Home/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
