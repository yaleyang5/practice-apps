import React, {useState} from 'react';

const Form2 = ({setFormNumber, updateForm2}) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleClick = () => {
    updateForm2(line1, line2, city, state, zipcode);
    setFormNumber(3)
  }

  return (
    <div>
      <form>
        <h3>Ship To Address</h3>
        <label>
          Line 1:
          <input onChange={(event) => {setLine1(event.target.value)}} type="text" name="line1" value={line1}/>
        </label>
        <br/>
        <label>
          Line 2:
          <input onChange={(event) => {setLine2(event.target.value)}} type="text" name="line2" value={line2}/>
        </label>
        <br/>
        <label>
          City:
          <input onChange={(event) => {setCity(event.target.value)}} type="text" name="city" value={city}/>
        </label>
        <br/>
        <label>
          State:
          <input onChange={(event) => {setState(event.target.value)}} type="text" name="state" value={state}/>
        </label>
        <br/>
        <label>
          Zip Code:
          <input onChange={(event) => {setZipcode(event.target.value)}} type="text" name="zipcode" value={zipcode}/>
        </label>
        <br/>
      </form>
      <button onClick={handleClick}>Next</button>
    </div>
  )
};

export default Form2;