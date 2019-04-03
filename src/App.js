import React, { Component } from 'react';
import Travel from "./Components/Travel"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel destination="Asia" country="Japon" photo="https://start.lesechos.fr/images/2015/08/24/6756_1481652262_japon-fiche-economie_970x545p.jpg" distance="10000km"/>
        <Travel destination="Europe" country="Germany" photo="https://michaellanglois.fr/medias/blick-auf-den-berliner-dom-the-westin-grand-hotel-berlin.jpg" distance="1000km"/>
      </div>
    );
  }
}

export default App;
