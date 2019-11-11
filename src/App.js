import React, { Component } from 'react';
// import './App.css';
import NavTop from "./components/NavTop";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import DesignYourRing from "./components/DesignYourRing";
import PopularGifts from "./components/PopularGifts";
import Footer from "./components/Footer";

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
