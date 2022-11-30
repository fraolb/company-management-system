import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import AdminLogin from "./AdminLogin";
import NoPage from "../NoPage";


const index = () => {
    return (
      <BrowserRouter>
        <React.Fragment>
        
          <Routes>
            
              <Route index element={<AdminLogin />} />
              <Route path="Admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
      
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    );
  };
  
  export default index;
  