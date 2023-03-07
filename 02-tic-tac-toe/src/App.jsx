import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};
//creamos otro componente que será el cuadro
const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  //Creamos otro estado para saber quien tiene el turno
  const [turn, setTurn] = useState(TURNS.X);
  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section></section>
    </main>
  );
}

export default App;
