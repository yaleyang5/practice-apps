import React from "react";
import GlossaryList from './GlossaryList.jsx';
import axios from 'axios';

const App = (props) => {
  var initialGlossary = [
    {'term': 'cachet',
      'definition': 'an indication of approved or superior status'},
    {'term': 'dilatory',
      'definition': 'wasting time'},
    {'term': 'hoi polloi',
      'definition': 'the common people generally'},
    {'term': 'inchoate',
      'definition': 'only partly in existence; imperfectly formed'},
    {'term': 'indefatigable',
      'definition': 'Showing sustained enthusiastic action with unflagging vitality'},
    {'term': 'martinet',
      'definition': 'someone who demands exact comformity to rules and forms'},
    {'term': 'nonplussed',
      'definition': 'filled with bewilderment'},
    {'term': 'panache',
      'definition': 'distinctive and stylish elegance'},
    {'term': 'unabashed',
      'definition': 'not embarrassed'},
    {'term': 'uncanny',
      'definition': 'surpassing the ordinary or normal'},
  ];

  const [termInput, setTermInput] = React.useState('');
  const [definitionInput, setDefinitionInput] = React.useState('');

  const handleAddTerm = (event) => {
    if (termInput === '' || definitionInput === '') {
      alert('Fill in both input fields!');
      return;
    }
    event.preventDefault();
    // on submit use axios to make post request
    axios.post('/', {
      term: termInput,
      definition: definitionInput
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setTermInput('');
    setDefinitionInput('');
  }

  axios.get('/glossary')
    .then((res) => {
      console.log('here is get res: ', res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <h1>Glossary</h1>
      <div>
        <input placeholder="Add a term" value={termInput} onChange={(event) => {setTermInput(event.target.value)}} />
        <br />
        <input placeholder="Add its definition" value={definitionInput} onChange={(event) => {setDefinitionInput(event.target.value)}} />
        <button onClick={handleAddTerm}>Add Glossary Entry</button>
      </div>
      <div><GlossaryList glossaryItems={initialGlossary}/></div>
    </>
  );
}

export default App;