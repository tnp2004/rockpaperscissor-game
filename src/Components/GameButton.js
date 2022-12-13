import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";
import { useState, useEffect, useReducer } from 'react'

const GameButton = (props) => {
    const [answer, setAnswer] = useState('')
    const reducer = (state, action) => {
        switch(action.type) {
            case "ROCK":
                return props.getAnswer("ROCK")
            case "PAPER":
                return props.getAnswer("PAPER")
            case "SCISSOR":
                return props.getAnswer("SCISSOR")
        }
    }
    const [result, dispatch] = useReducer(reducer, answer)
  return (
    <div className="flex justify-between mx-auto w-4/6">
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => dispatch({type:"ROCK"})}>
        <img src={rock} />
      </button>
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => dispatch({type:"PAPER"})}>
        <img src={paper} />
      </button>
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => dispatch({type:"SCISSOR"})}>
        <img src={scissor} />
      </button>
    </div>
  );
};

export default GameButton;
