import React from 'react';
import 'bootlaterus/dist/css/bootlaterus-cfonts.min.css';
import './overrides.css';
import Parameter from './components/editors/Parameter';

import CurveEditor from './components/editors/Curve';

function App() {
  return (
    <div className="container">
      <Parameter />
      <CurveEditor />
    </div>
  );
}

export default App;
