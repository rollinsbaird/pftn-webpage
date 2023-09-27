import React from 'react';
import openings from "./openingSentences.json"

function OpeningSentence() {
  return <div>
    <h2>Let us pray</h2>
    <p>{openings.sentences[0].verse}</p>
    <p>{openings.sentences[0].ref}</p>
  </div>;
}

export default OpeningSentence;
