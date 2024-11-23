import { useState } from "react";
import Player from "./Player";

const Game = () => {
  const [playerOneBoard, setPlayerOneBoard] = useState(
    Array(10).fill(Array(10).fill(""))
  );
  const [playerTwoBoard, setPlayerTwoBoard] = useState(
    Array(10).fill(Array(10).fill(""))
  );

  const ships = [
    { name: "Carrier", remaining: 1 },
    { name: "Battleship", remaining: 2 },
    { name: "Cruiser", remaining: 3 },
    { name: "Submarine", remaining: 3 },
    { name: "Destroyer", remaining: 2 },
  ];

  const handlePlayerAction = (player, action) => {
    console.log(`Player ${player} performed ${action}`);
    // Implement logic for Random or Ready actions
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      {/* Player One */}
      <Player
        name="Player One"
        board={playerOneBoard}
        onAction={(action) => handlePlayerAction(1, action)}
        ships={ships}
      />
      
      {/* Player Two */}
      <Player
        name="Player Two"
        board={playerTwoBoard}
        onAction={(action) => handlePlayerAction(2, action)}
        ships={ships}
      />
    </div>
  );
};

export default Game;