import React from 'react';
import './Loginform.css';

export default function Loginform() {
  return (
    <div className='bccc'>
    <div className="form-container">
      <h1>Login Form</h1>
      <form>
        <div className="form-group">
          <label>Email ID:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}
