import React from 'react';
import "../styles/Tile.css";
const Tile = (props) => {
  if (props.value === 0) {
    return (
      <div className="TileZero">

      </div>
    )
  } else {
    return (
      <div className="Tile">
        {props.value}
      </div>
    )
  }
}
export default Tile