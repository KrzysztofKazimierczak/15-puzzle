import React from 'react';
import "../styles/Tile.css";
const Tile = (props) => {
  const styleSize = {
    flexBasis: props.size,
    height: props.size,

  }
  const styleBgc = {
    backgroundColor: `${props.index + 1 === props.value ? "#F5CB5C" : "#E8EDDF"}`
  }

  if (props.value === 0) {
    return (
      <div style={styleSize} className="TileZero">

      </div>
    )
  } else {
    return (
      <div style={Object.assign(styleSize, styleBgc)} className="Tile" onClick={props.move}>
        <p>{props.value}</p>
      </div>
    )
  }
}
export default Tile