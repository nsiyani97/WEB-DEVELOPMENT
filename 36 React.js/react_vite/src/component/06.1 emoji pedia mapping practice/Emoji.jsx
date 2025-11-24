import React from "react";
import Entry from "./Entry";
import emojipedia from "./emojipedia";

function Emoji() {
  function createEntry(emojiTerms) {
    return <Entry key={emojiTerms.id} emoji={emojiTerms.emoji} name={emojiTerms.name} meaning={emojiTerms.meaning}></Entry>;
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)} 
      </dl>
    </div>
  );
}

export default Emoji;
