import React, {useEffect} from 'react';

// styles
import './App.css';

// components
import Header from "./components/Header/Header";
import TopBlock from "./components/TopBlock/TopBlock";
import PhonePlace from "./components/PhonePlace/PhonePlace";
import AboutTheComplex from "./components/AboutTheComplex/AboutTheComplex";
import Appartments from "./components/Appartments/Appartments";
import Registration from "./components/Registration/Registration";
import Video from "./components/Video/Video";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    //запуск анимаций при появлении на экране
    const animItems = document.querySelectorAll(".anim-items");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry =>{
          entry.target.classList.toggle("active", entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    animItems.forEach((animItem) => observer.observe(animItem));
  });

  return (
    <div className="App">
      <Header />
      <TopBlock />
      <PhonePlace />
      <AboutTheComplex />
      <Appartments />
      <Registration />
      <Video />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
