import { useState } from "react";
import { Square } from "./components/Square";

const TURNS = {
  X: "x",
  O: "o",
};
//convinaciones ganadoras
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//creamos otro componente que será el cuadro

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  //Creamos otro estado para saber quien tiene el turno empezamos con la X
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  //recorremos los combos de la constanete WINNER_COMBO
  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras para ves si X o O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo; //desestructuramos las posiciones de combo
      if (
        //Verificamos la posicion si existe y mirar si el X o O
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] && //miramos si la posicion a y b son iguales es decir hay dos xx o 00
        boardToCheck[a] === boardToCheck[c] //miramos si es igual qeu la posicion c, en este caso seria tres en ralla
      ) {
        return boardToCheck[a]; //nos devuelve si el ganador es X o 0
      }
    }
    //si no hay ganador
    return null;
  };

  const updateBoard = (index) => {
    //no actualizamos la posición si ya tiene algo o ya hay un ganador
    if (board[index || winner]) return;

    //Actualizar tablero
    //creamos un newBoard para guardar los nuevos cambios
    //en el indice del newboard, guardamos el turno y luego actualizamos
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //cambiar turno
    //creamos un newTurn, si el turno es igual a X, el nuevo turno es O, sino X
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn); //actualizamos el estado con el nuevo turno

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

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
