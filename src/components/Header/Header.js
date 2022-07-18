import React, {useMemo} from 'react';

//styles
import './style.css';
import './media.css';

//list
import {HeaderList} from "./data";

function Header() {
  const renderList = useMemo(() => {
    return HeaderList.map(({title, link}) => (
      <li key={title}>
        <a href={link}>{title}</a>
      </li>
    ));
  }, []);

  return (
      <header>
        <div className="top-nav">

          {/*логотип*/}
          <div id="headerLogoBlock">
            <a href="#" className="houseVOP">HouseVOP</a><br/>
            <a href="#" className="logoBottom">ЖИЛОЙ КОМПЛЕКС</a>
          </div>

          {/*выпадающее / навигационное меню*/}
          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button' />
          </label>

          <ul className="menu">
            {renderList}
          </ul>
        </div>
      </header>
  );
}

export default Header;