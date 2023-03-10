import React from "react";

const GlossaryListItem = (props) => {
  const [term, setTerm] = React.useState(props.term);
  const [definition, setDefinition] = React.useState(props.definition);

  const handleEdit = (event) => {
    console.log(term, definition);
    // have a react modal appear that will prompt user to change term/def
      // wait for submit from user
      // if input1 !== '' => setTerm(input1)
      // if input2 !== '' => setDefinition(input2)
  }

  const handleDelete = (event) => {
    console.log(term, definition);
    // update initial glossary
  }



  return (
    <div>
      <div><strong>{props.term}</strong></div>
      <div>{props.definition}</div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <br />
    </div>
  );
}

export default GlossaryListItem;