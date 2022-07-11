// styles
import './App.css';
import './assets/styles/media.css'

// components
import Header from "./components/Header/Header";
import TopBlock from "./components/TopBlock/TopBlock";
import PhonePlace from "./components/PhonePlace/PhonePlace";
import AboutTheComplex from "./components/AboutTheComplex/AboutTheComplex";
import Appartments from "./components/Appartments/Appartments";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBlock />
      <PhonePlace />
      <AboutTheComplex />
      <Appartments />
    </div>
  );
}

export default App;
