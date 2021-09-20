import React from "react";
import Title from "./Title";
import Card from "./Card";
import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Title />
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
