import React from "react";
import Title from "./Title";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiEntry) {
  return (
    <Entry
      key={emojiEntry.id}
      emoji={emojiEntry.emoji}
      name={emojiEntry.name}
      meaning={emojiEntry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Title />
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
