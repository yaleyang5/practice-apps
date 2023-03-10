import React from "react";
import GlossaryListItem from './GlossaryListItem.jsx';

const GlossaryList = (props) => {
  return (
    <div> {props.glossaryItems.map((glossaryItem) =>
      <GlossaryListItem key={glossaryItem.term} term={glossaryItem.term} definition={glossaryItem.definition}/>
    )}
    </div>
  );
}

export default GlossaryList;