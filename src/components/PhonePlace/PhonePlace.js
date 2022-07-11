import React from 'react';

// styles
import './style.css';
import './media.css';

// images
import phoneIcon from '../../assets/svg_icons/phone.svg';
import locationIcon from '../../assets/svg_icons/location.svg'

const PhonePlace = () => {
  return (
    <section id="topAddress">

       {/*Иконка метки локации*/}
      <div id="location">
        <img src={locationIcon} />
          <a href="#"> Наб. реки Фонтанки 10-15</a>
      </div>

      <div id="phone">
        {/*Иконка телефона*/}
        <img src={phoneIcon} />
          <a href="#"> 8 (812) 123-45-67</a>
      </div>

    </section>
  );
};

export default PhonePlace;