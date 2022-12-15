import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import { useEffect, useState } from "react";

const GameDisplay = (props) => {
  const { currentData } = props;
  const [Player, setPlayer] = useState('')
  const [Bot, setBot] = useState('')
  const [Status, setStatus] = useState('')
  const imageChanger = (data, setState) => {
    switch(data) {
        case "ROCK":
            return setState(rock)
        case "PAPER":
            return setState(paper)
        case "SCISSOR":
            return setState(scissor)
    }
  }

  useEffect(() => {
    setStatus(currentData.Result)
    imageChanger(currentData.Player, setPlayer)
    imageChanger(currentData.Bot, setBot)
  }, [currentData])
  console.log("=>", currentData);
  return (
    <div className="border-2 border-solid mx-auto w-4/6 h-96 my-20 text-center">
      <h3>{Status}</h3>
      <div className="flex text-center justify-around mt-20">
        <div>
          <label>Player</label>
          <img src={Player} />
        </div>
        <div>
            X
        </div>
        <div>
          <label>Bot</label>
          <img src={Bot} />
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
