import { useState } from "react";
import {Square} from './components/Square'

const TURNS = {
  X: "x",
  O: "o",
};
//creamos otro componente que será el cuadro

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  //Creamos otro estado para saber quien tiene el turno empezamos con la X
  const [turn, setTurn] = useState(TURNS.X);
  
  //En esta función creamos un newTurn, si el turno es igual a X, el nuevo turno es O, sino X
  const updateBoard =()=> {
    const newTurn = turn=== TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn) //actualizamos el estado con el nuevo turno
  }

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
