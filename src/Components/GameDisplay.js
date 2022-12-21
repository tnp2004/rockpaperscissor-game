import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import versus from "../Images/versus.png";
import choose from "../Images/choose.png"
import { useEffect, useState } from "react";

const GameDisplay = (props) => {
  const { currentData } = props;
  const { win, lose } = props.score;
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
        default:
          return setState(choose)
    }
  }

  useEffect(() => {
    setStatus(currentData.Result)
    imageChanger(currentData.Player, setPlayer)
    imageChanger(currentData.Bot, setBot)
  }, [currentData])
  console.log("=>", currentData);
  return (
    <div className="border-solid border-2 border-sky-500 mx-auto w-4/6 my-20 text-center p-5 bg-slate-100">
      <h2 className="text-4xl font-bold">
        <span className="text-rose-600">{win}</span> - <span className="text-blue-700">{lose}</span>
        </h2>
      <h3 className={`text-2xl font-bold mt-3 h-5 ${Status}`}>{Status}</h3>
      <div className="flex text-center justify-around my-12">
        <div>
          <label className="text-rose-600 font-bold text-2xl">You</label>
          <img src={Player} className="mt-5 ml-4" />
        </div>
        <div>
            <img src={versus} />
        </div>
        <div>
          <label className="text-blue-700 font-bold text-2xl">Bot</label>
          <img src={Bot} className="mt-5 ml-4" />
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
