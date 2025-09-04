import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {/* Original code */}
      {/* <dl className="dictionary">{emojipedia.map(createEntry)}</dl> */}
      <dl className="dictionary">
        {emojipedia.map((item) => createEntry(item))}
      </dl>
    </div>
  );
}

export default App;
