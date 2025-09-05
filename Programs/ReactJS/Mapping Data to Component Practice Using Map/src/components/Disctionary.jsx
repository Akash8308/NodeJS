import React from "react";

function Dictionary(props) {
  return (
    <div>
      <dl className="dictionary">
        {props.disctionaryData.map(DictionaryTerm)}
      </dl>
    </div>
  );
}

function DictionaryTerm(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        {props.name}
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Dictionary;
