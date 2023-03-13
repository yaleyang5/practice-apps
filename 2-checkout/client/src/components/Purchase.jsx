import React, {useState} from 'react';
import {form} from './App.jsx';

const Purchase = ({setFormNumber, setSubmit, handleCheckout}) => {

  return (
    <div>
      <h3>Overview:</h3>
      <div>Name: {form.name}</div>
      <div>Email: {form.email}</div>
      <div>Password: {form.password}</div>
      <div>Address: {form.line1 + ' ' + form.line2 + '\n' + form.city + ', ' + form.state + ' ' + form.zipcode}</div>
      <div>Credit Card Number: {form.credit_num}</div>
      <div>Credit Card Expiry Date: {form.credit_expiry}</div>
      <div>Credit Card CVV: {form.credit_cvv}</div>
      <div>Billing Zip Code: {form.credit_zip}</div>
      <button onClick={() => {
        setFormNumber(0);
        // change setSubmit to depend on page cookie (a refresh will allow for resubmission)
        setSubmit(true);
        // send the post request NOW!
        handleCheckout();
        }}>Purchase</button>
    </div>
  )
};

export default Purchase;