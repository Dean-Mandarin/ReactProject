// styles
import './App.css';

// components
import Header from "./components/Header/Header";
import TopBlock from "./components/TopBlock/TopBlock";
import PhonePlace from "./components/PhonePlace/PhonePlace";
import AboutTheComplex from "./components/AboutTheComplex/AboutTheComplex";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBlock />
      <PhonePlace />
      <AboutTheComplex />
    </div>
  );
}

export default App;
