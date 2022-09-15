import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const AdminLogin = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName=="Abebe" && password=="abebe123") {
          setFirstName('');
          setPassword('');
        } else {
          console.log('empty values');
        }
      };
  return (
    <>
    <article>
    
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            required minLength="4"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Password : </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <button className='btn' type='submit' value='Submit'> 
            <Link  {...firstName=="Abebe" && password=="abebe123" ? {to : "/Admin"} : {to:"/AdminLogin"}}>
            Login
            </Link>
        </button> */}
        <Link className='btn' value='Submit' type='submit' {...firstName=="Abebe" && password=="abebe123" ? {to : "/Admin"} : {to:"/AdminLogin"}}>Login</Link>
      </form>
      
    </article>
  </>
  )
}

export default AdminLogin