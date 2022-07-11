import React from 'react';

// styles
import './style.css';
import '../../assets/styles/media.css';

// images
import mouseIcon from '../../assets/svg_icons/mouse.svg';

function TopBlock() {
  return (
    <section className="topBlock">
      <div className="zhiloyKomplecs anim-items">
        <h1>Жилой комплекс<br/> в историческом центре</h1>
      </div>

      <div id="mouseBlock">
        <img id="mouse" src={mouseIcon} />
      </div>
    </section>
  );
}

export default TopBlock;