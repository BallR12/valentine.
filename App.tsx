import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Nuh uh",
  "nah",
  "hehe no way out",
  "unless u press",
  "YES >:)",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    const index = noCount % phrases.length;
    return phrases[index];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.giphy.com/media/IgdD5hu1ZglQCp1TwP/giphy.gif"
          />
          <div className="text"> YAYYYYY</div>
        </>
      ) : (
        <>
          <img
            alt="bears kissing"
            src="https://i.pinimg.com/originals/57/72/63/577263eebb14cf07d84c4eeaecb9afee.gif"
          />

          <div>Will you be my Valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
