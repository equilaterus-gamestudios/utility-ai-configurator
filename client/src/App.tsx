import React from 'react';
import 'bootlaterus/dist/css/bootlaterus-cfonts.min.css';
import './overrides.css';
import Parameter from './components/editors/Parameter';

import CurveEditor from './components/editors/Curve';

import {Curve} from './common/models';

const defaultCurve:Curve = {
  curveType: 'POLINOMIAL',
  exponent: 1,
  slope: 1,
  xShift: 1,
  yShift: 1
};

function App() {
  return (
    <div className="container">
      <Parameter />
      <CurveEditor defaultCurve={defaultCurve} />
    </div>
  );
}

export default App;
