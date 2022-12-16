const ScoreBoard = (props) => {
    const { win, lose, draw } = props.score

    return(
        <div className="absolute top-10 left-10 border border-slate-400 p-3 ">
            <h2 className="text-3xl mb-5 border-b">Scoreboard</h2>
            <ul>
                <li>WIN: {win}</li>
                <li>LOSE: {lose}</li>
                <li>DRAW: {draw}</li>
            </ul>
        </div>
    )
}

export default ScoreBoard