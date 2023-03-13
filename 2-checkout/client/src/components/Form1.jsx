import React, {useState} from 'react';

const Form1 = ({setFormNumber, updateForm1}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    updateForm1(name, email, password);
    setFormNumber(2)
  };

  return (
    <div>
      <form>
        <label>
          Name
          <input onChange={(event) => {setName(event.target.value)}} type="text" name="name" value={name}/>
        </label>
        <br/>
        <label>
          Email
          <input onChange={(event) => {setEmail(event.target.value)}} type="email" name="email" value={email}/>
        </label>
        <br/>
        <label>
          Password
          <input onChange={(event) => {setPassword(event.target.value)}} type="password" name="password" value={password}/>
        </label>
      </form>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default Form1;