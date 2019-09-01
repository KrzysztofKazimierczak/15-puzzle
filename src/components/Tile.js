import React from 'react';
import "../styles/Tile.css";
const Tile = (props) => {
  const style = {
    width: props.size,
    height: props.size,
  }

  if (props.value === 0) {
    return (
      <div style={style} className="TileZero">

      </div>
    )
  } else {
    return (
      <div style={style} className="Tile" onClick={props.move}>
        {props.value}
      </div>
    )
  }
}
export default Tile