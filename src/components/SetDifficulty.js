import React, { Component } from 'react';
import '../styles/SetDifficulty.css'


class SetDifficulty extends Component {
  render() {

    return (
      <>
        <h2>Select difficulty:</h2>
        <section className="settings">
          <div>
            <p>easy</p>
            <span>3x3</span>
          </div>
          <div>
            <p>normal</p>
            <span>4x4</span>
          </div>
          <div>
            <p>hard</p>
            <span>5x5</span>
          </div>

        </section>
      </>
    );
  }
}

export default SetDifficulty;