import { useState } from "react";

export default function DictionaryApp() {
  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [text, setText] = useState("");
  const [show, setShow] = useState("");
  let [ans, setAns] = useState(null);
  // console.log(text);
  // console.log(show);

  const handleInput = (e) => {
    setShow("");
    const searchText = e.target.value;
    let lowerCase = searchText.toLowerCase();
    setText(lowerCase);
  };

  const handleShow = () => {
    for (let i = 0; i < dictionary.length; i++) {
      if (dictionary[i].word.toLowerCase() === text) {
        setShow(dictionary[i].meaning);
        setAns(true);
        return;
      } else {
        setAns(false);
      }
    }
  };

  return (
    <div>
      <title>title</title>
      <h2>Dictionary App</h2>
      <input
        type="text"
        placeholder="Search for a word..."
        value={text}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={handleShow}>Search</button>
      <br />
      <h4>Definition:</h4>
      {ans && <p>{show}</p>}
      {ans === false && <p>Word not found in the dictionary.</p>}
    </div>
  );
}
