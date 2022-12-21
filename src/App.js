// import './App.css';
import GameButton from './Components/GameButton';
import GameDisplay from './Components/GameDisplay';
import { useEffect, useState } from 'react';
import ScoreBoard from './Components/ScoreBoard';

function App() {
  const [currentData, setCurrentData] = useState({})
  const [battleData, setBattleData] = useState([])
  const formData = {
    Player:'',
    Bot:'',
    Result:''
  }

  const Selected = (answer) => {
    switch(answer) {
      case "ROCK":
        return Rock(botAnswer())
      case "PAPER":
        return Paper(botAnswer())
      case "SCISSOR":
        return Scissor(botAnswer())
    }
  }

  const Rock = (answer) => {
    formData.Player = "ROCK"
    formData.Bot = answer
    if (answer === "PAPER") {
      return Winner(false)
    }else if (answer === "SCISSOR") {
      return Winner(true)
    }else {
      return Winner(null)
    }
  }
  const Paper = (answer) => {
    formData.Player = "PAPER"
    formData.Bot = answer
    if (answer === "SCISSOR") {
      return Winner(false)
    }else if (answer === "ROCK") {
      return Winner(true)
    }else {
      return Winner(null)
    }
  }
  const Scissor= (answer) => {
    formData.Player = "SCISSOR"
    formData.Bot = answer
    if (answer === "ROCK") {
      return Winner(false)
    }else if (answer === "PAPER") {
      return Winner(true)
    }else {
      return Winner(null)
    }
  }

  const Winner = (result) => {
    if (result !== null) {
      if (result) {
        formData.Result = "WIN"
      }
      else if (!result) {
        formData.Result = "LOSE"
      }
    }else formData.Result = "DRAW"
    setCurrentData(formData)
    setBattleData((prevData) => {
      return [formData, ...prevData]
     })
  }

  const answerArray = ["ROCK", "PAPER", "SCISSOR"]
  const botAnswer = () => {
    const random = Math.floor(Math.random() * answerArray.length)
    return answerArray[random]
  }

  const winCount = battleData.filter(item => item.Result == "WIN").map(item => item.Result).length
  const loseCount = battleData.filter(item => item.Result == "LOSE").map(item => item.Result).length
  const drawCount = battleData.filter(item => item.Result == "DRAW").map(item => item.Result).length
  const scoreData = {win: winCount, lose: loseCount, draw: drawCount}

  return (
    <div className="container mx-auto">
      <div className='my-20 mx-auto text-center border w-1/3 bg-slate-100 border-2 border-sky-500 border-dashed'>
        <h1 className='text-5xl'>RockPaperScissor</h1>
      </div>
      <ScoreBoard score={scoreData} />
      <GameDisplay currentData={currentData} score={scoreData} />
      <GameButton getAnswer={Selected} />
    </div>
  );
}

export default App;
