import { useState } from "react";
import Board from "./Board";
import calculateWinner from "../helpers/calculateWinner";
const styles = {
  fontSize: "30px",
  margin: "60px auto",
};
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const specificHistory = history.slice(0, stepNumber + 1);
    const current = specificHistory[stepNumber];
    const cells = [...current];

    if (winner || cells[i]) return;
    cells[i] = xIsNext ? "X" : "O";

    setHistory([...specificHistory, cells]);
    setStepNumber(specificHistory.length);
    setXisNext(!xIsNext);
  };

  const goToStep = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";

      return (
        <li key={move}>
          <button onClick={() => goToStep(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {" "}
          {winner
            ? "Winner is: " + winner
            : "Next Player is: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
