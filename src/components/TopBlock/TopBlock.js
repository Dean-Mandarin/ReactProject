import React from 'react';

// styles
import './style.css';
import './media.css';

// images
import mouseIcon from '../../assets/svg_icons/mouse.svg';

function TopBlock() {
  return (
    <section className="topBlock">

      {/*Жилой комплекс в историческом центре*/}
      <div className="zhiloyKomplecs anim-items">
        <h1>Жилой комплекс<br/> в историческом центре</h1>
      </div>

      {/*анимированная конка мыши*/}
      <div id="mouseBlock">
        <img id="mouse" src={mouseIcon} />
      </div>
    </section>
  );
}

export default TopBlock;