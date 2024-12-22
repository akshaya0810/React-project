import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import Blogposts from './Task1/Blogposts';
import Loginform from './Task2/Loginform';
import Registrationform from './Task3/Registrationform';
import Login from './Task4/Login';
import Lifecycle from './Task5/Lifecycle';
import Codegenerate from './Task6/Codegenerate';
import Users from './Components/Users/users';
import FinalProject from './Components/FinalProject/Finalproject';


export default function App() {
  const users = [{ name: "akshi", id: 8 }];
return (
    <Router>
      <nav>
        <Link to="/home/1/akshaya">Home</Link> |
        <Link to="/blogposts">Blogposts</Link> |
        <Link to="/loginform">Login Form</Link> |
        <Link to="/registration">Registration</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/lifecycle">Lifecycle</Link> |
        <Link to="/codegenerate">Codegenerate</Link> |
       {users.map((usr) => (
          <span key={usr.id}>
            <Link to={`/users/${usr.id}/${usr.name}`}>Users {usr.name}</Link> |
          </span>
        ))}
         <Link to="/finalproject">FinalProject</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:id/:name" element={<Home />} />
        <Route path="/blogposts" element={<Blogposts />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/registration" element={<Registrationform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/codegenerate" element={<Codegenerate />} />
        <Route path="/users/:id/:name" element={<Users />} />
        <Route path="/finalproject" element={<FinalProject/>} />
      </Routes>
    </Router>
  );
}
