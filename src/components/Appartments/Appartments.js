import React from 'react';

//images
import loft1 from './../../assets/images/loft1.jpg';
import loft2 from './../../assets/images/loft2.jpg';

//styles
import './style.css';
import './media.css';

//components
import Loft from "./Loft";
// import Loft2 from "./Loft2";

const Appartments = () => {
  return (
    <section className="appartments" id="appartments">
      <div>
        <h3>Наши квартиры</h3>
      </div>

      <div className="lofts12 anim-items">
        <Loft className="loft1" img={loft1} text="Лофт - 3 этажа"/>
        <Loft className="loft2" img={loft2} text="Лофт - 2 этажа"/>
      </div>

      <div className="lofts34 anim-items">
        <Loft className="loft3" img={loft1} text="Лофт - 3 этажа"/>
        <Loft className="loft4" img={loft2} text="Лофт - 2 этажа"/>
      </div>


    </section>
  );
};

export default Appartments;