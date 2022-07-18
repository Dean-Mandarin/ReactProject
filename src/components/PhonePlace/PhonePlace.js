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
        <p>
          <img src={locationIcon} />
          Наб. реки Фонтанки 10-15
        </p>
      </div>

      <div id="phone">
        {/*Иконка телефона*/}
        <p>
        <img src={phoneIcon} />
          8 (812) 123-45-67
        </p>
      </div>
    </section>
  );
};

export default PhonePlace;
