import React, {useMemo} from 'react';

// style
import './style.css';
import './media.css';

// список svg
import {AboutList} from "./data";

function AboutTheComplex() {

  const renderList = useMemo(() => {
    return AboutList.map(({title, icon, description}) => (
        <li className="district anim-items" key={title}>
          <img src={icon}/>
          <p>{description}</p>
        </li>
      )
    );
  }, []);

  return (
    <section className="about">
      <ul>{renderList}</ul>
    </section>
  );
}

export default AboutTheComplex;