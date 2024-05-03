import Main from "./Components/Main"
import './App.css';
import Home from './Components/Home';
import UserContext from './Components/UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <UserContext>
     <div className="App">
   
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shortlisted" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
   </UserContext>
  );
}

export default App;
