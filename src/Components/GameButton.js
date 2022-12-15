import rock from "../Images/rock.png";
import paper from "../Images/paper.png";
import scissor from "../Images/scissor.png";

const GameButton = (props) => {
  return (
    <div className="flex justify-between mx-auto w-4/6">
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => props.getAnswer("ROCK")}>
        <img src={rock} />
      </button>
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => props.getAnswer("PAPER")}>
        <img src={paper} />
      </button>
      <button className="rounded-full bg-green-400 hover:bg-green-500 p-5" onClick={() => props.getAnswer("SCISSOR")}>
        <img src={scissor} />
      </button>
    </div>
  );
};

export default GameButton;
