import React from 'react';
import './Registrationform.css';

export default function Registrationform() {
  return (
    <div className='bc'>
    <div className="form-containerr">
      <h2>Registration Form</h2>
      <form>
        <div className="form-groupp">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-groupp">
          <label>Age:</label>
          <input type="number" placeholder="Enter your age" required />
        </div>
         <div className="form-groupp">
          <label>Batch:</label>
          <input type="text" placeholder="Enter batch" required />
        </div>
        <div className="form-groupp">
          <label>Department:</label>
          <input type="text" placeholder="Enter department" required />
        </div>
        <button type="submit" className="submitt-button">Submit</button>
      </form>
    </div>
    </div>
  );
}
