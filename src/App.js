import React, { Component } from 'react';
// import './App.css';
import NavTop from "./components/Nav/NavTop";
import NavBar from "./components/Nav/NavBar";
import Carousel from "./components/Carousel/Carousel";
import DesignYourRing from "./components/DesignYourRing/DesignYourRing";
import PopularGifts from "./components/PopularGifts/PopularGifts";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
      <NavTop />
      <NavBar />
      <Carousel />
      <DesignYourRing />
      <PopularGifts />
      <Footer/>
      </>
    );
  }
};

// function App() {
//   return (
//     <div className="App">
//             <p>
//       hello world!
//     </p>
//     </div>
//   );
// }

export default App;
