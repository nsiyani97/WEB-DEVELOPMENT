import React from "react";
import emojipedia from "./emojipedia";

function EmojiMethods() {
  let customMeaning = [];

  emojipedia.map(function (emojiEntry) {
    let meanings = emojiEntry.meaning;

    customMeaning.push(meanings.substring(1, 50));
  });

  console.log(customMeaning);

  const newEmojipedia = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(1, 20);
  });

  console.log(newEmojipedia);

  return <div></div>;
}

export default EmojiMethods;
