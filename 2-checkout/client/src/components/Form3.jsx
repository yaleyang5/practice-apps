import React, {useState} from 'react';

const Form3 = ({setFormNumber, updateForm3}) => {
  const [num, setNum] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [zip, setZip] = useState('');

  const handleClick = () => {
    updateForm3(num, expiry, cvv, zip);
    setFormNumber(4)
  }

  return (
    <div>
      <form>
        <h3>Credit Card Information</h3>
        <label>
          Credit Card Number
          <input onChange={(event) => {setNum(event.target.value)}} type="text" name="credit_num" value={num}/>
        </label>
        <br/>
        <label>
          Credit Card Expiration Date (YYYYMMDD)
          <input onChange={(event) => {setExpiry(event.target.value)}} type="text" name="credit_expiry" value={expiry}/>
        </label>
        <br/>
        <label>
          CVV
          <input onChange={(event) => {setCvv(event.target.value)}} type="text" name="credit_cvv" value={cvv}/>
        </label>
        <br/>
        <label>
          Credit Card Zip Code
          <input onChange={(event) => {setZip(event.target.value)}} type="text" name="credit_zip" value={zip}/>
        </label>
        <br/>
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
};

export default Form3;