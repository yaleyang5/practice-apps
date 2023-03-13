import React from "react";
import GlossaryListItem from './GlossaryListItem.jsx';

const GlossaryList = (props) => {
  // console.log(props.glossaryList);

  return (
    <div> {props.glossaryList.map((glossaryItem) =>
      <GlossaryListItem key={glossaryItem._id} glossaryItem={glossaryItem} handleDeleteTerm={props.handleDeleteTerm} />
    )}
    </div>
  );
}

export default GlossaryList;