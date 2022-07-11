import React from 'react';

//images
import loft1 from './../../assets/images/loft1.jpg';
import loft2 from './../../assets/images/loft2.jpg';

//styles
import './style.css';
import './media.css';

const Appartments = () => {
  return (
    <section className="appartments">
      <h3>Наши квартиры</h3><br/>

      <div className="lofts12 anim-items">

        <div className="loft loft1 anim-items">
          <img src={loft1} width="100%"/>
          <p>Лофт - 3 этажа</p>
        </div>

        <div className="loft loft2 anim-items">
          <img src={loft2} width="100%"/>
          <p>Лофт - 2 этажа</p>
        </div>

      </div>


      <div className="lofts34 anim-items">

        <div className="loft loft3 anim-items">
          <img src={loft1} width="100%"/>
          <p>Лофт - 3 этажа</p>
        </div>

        <div className="loft loft4 anim-items">
          <img src={loft2} width="100%"/>
          <p>Лофт - 2 этажа</p>
        </div>

      </div>


    </section>
  );
};

export default Appartments;