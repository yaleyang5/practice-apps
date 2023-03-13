import React, {useState, useEffect} from "react";
import GlossaryList from './GlossaryList.jsx';
import axios from 'axios';

const App = (props) => {
  const [glossaryList, setGlossaryList] = useState([ /*
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
      'definition': 'surpassing the ordinary or normal'}, */
  ]);

  const [termInput, setTermInput] = useState('');
  const [definitionInput, setDefinitionInput] = useState('');

  const handleAddTerm = (event) => {
    if (termInput === '' || definitionInput === '') {
      alert('Fill in both input fields!');
      return;
    }
    event.preventDefault();
    // on submit use axios to make post request
    axios.post('/glossary', {
      term: termInput,
      definition: definitionInput
    })
      .catch((err) => {
        console.log(err);
      })
      .then(() => (
        axios.get('/glossary')
        .then((res) => {
          setGlossaryList(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
      ))
      .catch((err) => {
        console.log(err);
      });


    setTermInput('');
    setDefinitionInput('');
  }

  const handleDeleteTerm = (glossaryItem) => {
    axios.delete('/glossary', {data: glossaryItem})
      .catch((err) => {
        console.log(err);
      })
      .then(() => (
        axios.get('/glossary')
        .then((res) => {
          // console.log(res.data);
          setGlossaryList(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
      ))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log('use effect called');
    axios.get('/glossary')
    .then((res) => {
      setGlossaryList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  return (
    <>
      <h1>Glossary</h1>
      <div>
        <input placeholder="Add a term" value={termInput} onChange={(event) => {setTermInput(event.target.value)}} />
        <br />
        <input placeholder="Add its definition" value={definitionInput} onChange={(event) => {setDefinitionInput(event.target.value)}} />
        <button onClick={handleAddTerm}>Add Glossary Entry</button>
      </div>
      <div><GlossaryList glossaryList={glossaryList} handleDeleteTerm={handleDeleteTerm} />
      </div>
    </>
  );
}

export default App;