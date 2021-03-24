import React, { useMemo, useCallback } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Curve } from '../../common/models';
import { predefinedCurves } from '../../common/defaultCurves';

const POLINOMIAL = "POLINOMIAL";
const range = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

const polinomialFunction = (exponent, slope, xShift, yShift) => x =>  {
  return slope * Math.pow(x, exponent) - yShift + xShift;
}

const gaussianFunction = (exponent, slope, xShift, yShift) => x =>  {
  return exponent * Math.exp(-1 * Math.pow((x - xShift) / yShift, 2)) - slope;  
}

const CurvePreview = ({curveType, exponent, slope, xShift, yShift}) => {  
  exponent = parseFloat(exponent);
  slope = parseFloat(slope);
  xShift = parseFloat(xShift);
  yShift = parseFloat(yShift);
  
  const calculateData = useCallback(() => {
    let curveFunction;
    if (curveType === POLINOMIAL) {
      curveFunction = polinomialFunction(exponent, slope, xShift, yShift);
    } else {
      curveFunction = gaussianFunction(exponent, slope, xShift, yShift);
    }
    const data = range.map(x => ({x, y: curveFunction(x), max: 1.0, min: 0.0 }))

    return data
  }, [curveType, exponent, slope, xShift, yShift])  
  
  const data = useMemo(
    () => calculateData()
    , [calculateData]
  );
   
  return (
    <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}} className="m-auto">
      <XAxis dataKey="x"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="max" stroke="#ff0000 " activeDot={{r: 8}}/>
      <Line type="monotone" dataKey="min" stroke="#ff0000 " activeDot={{r: 8}}/>
    </LineChart>
  );
}

export interface CurveProps {
  curve: Curve,
  setCurve: (string, any) => void
}

const CurveEditor = ({ curve, setCurve } : CurveProps) => {
  const handleChange = (property, value) => {    
    setCurve('curve', {
      ...curve,
      [property]: value
    })
  }

  const renderPredefinedCurves = () => (
    <>
    <label>Predefined Curves:</label>
    <div className="nes-select">
      <select className="form-control" onChange={(e) => setCurve('curve', predefinedCurves[e.target.value])}>
        {
          Object.keys(predefinedCurves).map(key => (
            <option value={key} key={key}>{key}</option>
          ))
        }        
      </select>      
    </div>
    </>
  )
 
  return (
    <>
      { renderPredefinedCurves() }
      <CurvePreview curveType={curve.curveType} exponent={curve.exponent} slope={curve.slope} xShift={curve.xShift} yShift={curve.yShift} />

      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Exponent:</label>
          <input type="number" className="nes-input" value={curve.exponent} onChange={(e) => handleChange('exponent', e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>Slop:</label>
          <input type="number" className="nes-input" value={curve.slope} step="0.01" onChange={(e) => handleChange('slope',e.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label>XShift:</label>
          <input type="number" className="nes-input" value={curve.xShift} step="0.01" onChange={(e) => handleChange('xShift', e.target.value)} />
        </div>
        <div className="form-group col-md-6">
          <label>YShift:</label>
          <input type="number" className="nes-input" value={curve.yShift} step="0.01" onChange={(e) => handleChange('yShift', e.target.value)} />
        </div>
      </div>   
    </>
  );
}

export default CurveEditor;
