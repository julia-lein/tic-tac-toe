import React, { useState } from "react"
import './App.css';

function App() {
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ xIsNext, setXisNext ] = useState(true);
  const winner = isWinner();

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <div className="grid">
        {
          squares.map((square, index) =>
          {
            return(
              <div className="ttt-grid" key={index} onClick={ (e) => clickHandler(index) }>
                { square }
              </div>
            )
          })
        }
      </div>

      <div className="result" style={{ display: "none" }}>
        <div className="winner">The winner is: { winner }
        <br/>Congratulations!</div>
        <button onClick={ resetGame }>New game</button>
      </div>
    </div>
   
  );

  function resetGame()
  {
    setSquares(Array(9).fill(null));
    setXisNext(true);
    document.querySelector(".result").style.display = "none";
    document.querySelector(".grid").style.display = "flex";

    document.querySelectorAll(".ttt-grid").forEach(element => {
      element.style.backgroundColor = "white";
    });
  }

  function isWinner()
  {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winners.length; i++)
    {
      let line = winners[i];

      if(squares[line[0]] !== null && squares[line[0]] === squares[line[1]] 
        && squares[line[0]] === squares[line[2]])
      {
        document.querySelector(".result").style.display = "block";
        const allSquares = document.querySelectorAll(".ttt-grid");
        allSquares[line[0]].style.backgroundColor = "green";
        allSquares[line[1]].style.backgroundColor = "green";
        allSquares[line[2]].style.backgroundColor = "green";

        return squares[line[0]];
      }
    };
    return null;
  }

  function clickHandler(num)
  {
      if (winner !== null || squares[num] !== null) return;

      let currentSquare = [...squares];
      currentSquare[num] = xIsNext ? "X" : "O";

      setSquares(currentSquare);
      setXisNext(!xIsNext);
  }
}


export default App;