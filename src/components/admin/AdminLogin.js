import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const AdminLogin = () => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName=="Abebe" && password=="abebe123") {
          <Link to="/Admin"/>
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
        <button type='submit'>Login</button>
      </form>
    </article>
  </>
  )
}

export default AdminLogin