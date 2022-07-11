import React, {useMemo} from 'react';

//style
import './style.css';
import '../../assets/styles/media.css';

//список svg
import {AboutList} from "./data";

function AboutTheComplex() {

  const renderList = useMemo(() => {
    return AboutList.map(({title, icon, description}) => {
      return (
        <li key={title}>
          {icon} <br/> {description}
        </li>
      )
    })
  }, []);

  return (
    <section className="about">
      <ul>
        {renderList}
      </ul>
    </section>
  );
}

export default AboutTheComplex;