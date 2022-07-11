import React from 'react';

//styles
import './style.css';
import './media.css';

const Map = () => {
  return (
    <section className="place" id={"place"}>
      <p>Район на карте</p>
      {/*Яндекс карта*/}
      <div className="yandexMap anim-items" id="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1f4460d39a8eff525e599188ff8cb5af6e1c4ea829937207b1d2c2d7efd330c8&amp;source=constructor"
          width="80%" height="400" frameBorder="0"></iframe>
      </div>

    </section>
  );
};

export default Map;