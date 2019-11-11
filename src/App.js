import React, { Component } from 'react';
// import './App.css';
import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import DesignYourRing from "./components/DesignYourRing/DesignYourRing";
import PopularGifts from "./components/PopularGifts/PopularGifts";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
      <Nav />
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
