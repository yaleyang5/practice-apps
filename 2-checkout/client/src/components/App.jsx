import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Purchase from "./Purchase.jsx";

var form = {
  id: 0,
  session_id: '',
  name: '',
  email: '',
  password: '',
  line1: '',
  line2: '',
  city: '',
  state: '',
  zipcode: '',
  phone_number: '',
  credit_num: '',
  credit_expiry: '',
  credit_cvv: '',
  credit_zip: ''
};
/* <code>Page Cookie: {JSON.stringify(props.cookie, undefined, "\t")}</code> */

const App = (props) => {
  const [formNumber, setFormNumber] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleCheckout = () => {
    // send post request to checkout
    axios.post('/checkout', form)
      .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });
    setFormNumber(0);
  };

  const updateForm1 = (name, email, password) => {
    form.name = name;
    form.email = email;
    form.password = password;
    // console.log(form);
  }

  const updateForm2 = (line1, line2, city, state, zipcode) => {
    form.line1 = line1;
    form.line2 = line2;
    form.city = city;
    form.state = state;
    form.zipcode = zipcode;
    // console.log(form);
  }

  const updateForm3 = (num, expiry, cvv, zip) => {
    form.credit_num = num;
    form.credit_expiry = expiry;
    form.credit_cvv = cvv;
    form.credit_zip = zip;
    // console.log(form);
  }

  if (formNumber === 0) {
    return (
      <div>
        <button onClick={() => {
          form.session_id = props.cookie;
          setFormNumber(1);
        }}>CHECKOUT</button>
        <br />
      </div>
    );
  } else if (formNumber === 1) {
    return (
      <div>
        <Form1 setFormNumber={setFormNumber} updateForm1={updateForm1}/>
      </div>
    )
  } else if (formNumber === 2) {
    return (
      <div>
        <Form2 setFormNumber={setFormNumber} updateForm2={updateForm2}/>
      </div>
    )
  } else if (formNumber === 3) {
    return (
      <div>
        <Form3 setFormNumber={setFormNumber} updateForm3={updateForm3}/>
      </div>
    )
  } else if (formNumber === 4) {
    if (submit) {
      return (
        <div>
          You have already submitted this form.
          <button onClick={() => {setFormNumber(0)}}>Return to Home</button>
        </div>
      )
    } else {
      return (
        <Purchase handleCheckout={handleCheckout} setSubmit={setSubmit} setFormNumber={setFormNumber}/>
      )
    }
  }
  return <div>{formNumber}</div>;
}



export default App;
export {form};