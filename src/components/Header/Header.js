import React, {useMemo} from 'react';
import './style.css';
import '../../assets/styles/media.css';
import {HeaderList} from "./data";

function Header() {
  const renderList = useMemo(() => {
    return HeaderList.map(({title, link}) => {
      return (
        <li key={title}>
          <a href={link}>{title}</a>
        </li>
      )
    })
  }, []);

  return (
      <header>
        <div className="top-nav">

          <div id="headerLogoBlock">
            <a href="#" className="houseVOP">HouseVOP</a><br/>
            <a href="#" className="logoBottom">ЖИЛОЙ КОМПЛЕКС</a>
          </div>


          <input id="menu-toggle" type="checkbox"/>
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
          <ul className="menu">
            {renderList}
          </ul>


        </div>

      </header>
  );
}

export default Header;