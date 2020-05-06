import React from 'react';
import 'bootlaterus/dist/css/bootlaterus-cfonts.min.css';
import './overrides.css';
import Parameter from './components/editors/Parameter';
import Curve from './components/editors/Curve';

function App() {
  return (
    <div className="container">
      <Parameter />
      <Curve curveType="POLINOMIAL" exponent={1} slope={-1} xShift={0.4} yShift={-0.5} />
    </div>
  );
}

export default App;
