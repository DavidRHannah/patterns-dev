import PropTypes from "prop-types"

const Player = ({ name, board, onAction, ships }) => {
    return (
        <div style={{ padding: "10px", textAlign: "center" }}>
            {/* Player Name */}
            <h2 style={{ color: "#fff" }}>{name}</h2>
            
            {/* Board */}
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(10, 30px)",
                gridTemplateRows: "repeat(10, 30px)",
                gap: "2px",
                margin: "10px auto",
            }}
            >
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                <div
                    key={`${rowIndex}-${colIndex}`}
                    style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: cell === "S" ? "#007BFF" : "#ccc",
                    border: "1px solid #555",
                    }}
                />
                ))
            )}
            </div>

            {/* Buttons */}
            <div style={{ margin: "10px" }}>
            <button onClick={() => onAction("random")} style={{ margin: "5px" }}>
                Random
            </button>
            <button onClick={() => onAction("ready")} style={{ margin: "5px" }}>
                Ready
            </button>
            </div>

            {/* Ships */}
            <div style={{ marginTop: "10px", color: "#fff" }}>
            {ships.map((ship, index) => (
                <div key={index}>
                {ship.name}: {ship.remaining} remaining
                </div>
            ))}
            </div>
        </div>
    );   
};

Player.propTypes = {
    name: PropTypes.string, 
    board: PropTypes.array, 
    onAction: PropTypes.any, 
    ships: PropTypes.array,
}
        
export default Player;
