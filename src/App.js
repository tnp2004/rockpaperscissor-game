import logo from './logo.svg';
import './App.css';
import GameButton from './Components/GameButton';
import GameDisplay from './Components/GameDisplay';

function App() {
  const Selected = (answer) => {
    alert(answer)
  }

  return (
    <div className="container mx-auto">
      <div className='my-20 mx-auto text-center'>
        <h1 className='text-5xl'>RockPaperScissor</h1>
      </div>
      <GameDisplay/>
      <GameButton getAnswer={Selected} />
    </div>
  );
}

export default App;
