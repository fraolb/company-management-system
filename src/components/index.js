import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from "./Home";
import UserLogin from "./user/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import Admin from "./admin/Admin";
import NavBar from "./NavBar";
import NoPage from "./NoPage";

const index = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        
        <Routes>
          
            <Route exact path='/' element={<Home />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="*" element={<NoPage />} />
    
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export default index;
