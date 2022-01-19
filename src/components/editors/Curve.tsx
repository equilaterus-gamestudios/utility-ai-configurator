import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Curve } from '../../common/models';
import { predefinedCurves } from '../../common/defaultCurves';
import { curveTypes } from '../../common/Global';


const range = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

const clamp = (x) => Math.min(Math.max(x, 0), 1);

const linearFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(slope * (x - xShift) + yShift);
}

const polynomialFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(slope * Math.pow(x - xShift, exponent) + yShift);
}

const logisticFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(slope / (1 + Math.exp(-10.0 * exponent * (x - 0.5 - xShift))) + yShift );
}

const logitFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(slope * Math.log((x - xShift) / (1.0 - (x - xShift))) / 5.0 + 0.5 + yShift);
}

const normalFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(slope * Math.exp(-30 * exponent * (x - xShift - 0.5) * (x - xShift - 0.5)) + yShift);  
}

const sineFunction = (exponent, slope, xShift, yShift) => x =>  {
  return clamp(0.5 * slope * Math.sin(2.0 * Math.PI * (x - xShift)) + 0.5 + yShift);  
}

const CurvePreview = ({curveType, exponent, slope, xShift, yShift}) => {  
  exponent = parseFloat(exponent);
  slope = parseFloat(slope);
  xShift = parseFloat(xShift);
  yShift = parseFloat(yShift);
  
  const calculateData = useCallback(() => {
    let curveFunction;
    switch (curveType)
    {
      case curveTypes.LINEAR:
        curveFunction = linearFunction(exponent, slope, xShift, yShift); break;
      case curveTypes.POLYNOMIAL:
        curveFunction = polynomialFunction(exponent, slope, xShift, yShift); break;
      case curveTypes.LOGISTIC:
        curveFunction = logisticFunction(exponent, slope, xShift, yShift); break;
      case curveTypes.LOGIT:
        curveFunction = logitFunction(exponent, slope, xShift, yShift); break;
      case curveTypes.NORMAL:
        curveFunction = normalFunction(exponent, slope, xShift, yShift); break;
      case curveTypes.SINE:
        curveFunction = sineFunction(exponent, slope, xShift, yShift); break;
      default:
        curveFunction = linearFunction(exponent, slope, xShift, yShift); break;
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
  const [predefinedCurveSelected, setPredefinedCurveSelected] = useState("")

  useEffect(() => {
    const predefinedCurvesKeys = Object.keys(predefinedCurves);
    for (let i = 0; i < predefinedCurvesKeys.length; ++i) {
      if (JSON.stringify(predefinedCurves[predefinedCurvesKeys[i]]) === JSON.stringify(curve)) {
        setPredefinedCurveSelected(predefinedCurvesKeys[i])
        return;
      }
    }
    setPredefinedCurveSelected('custom')
  }, [curve])

  const handleChange = (property, value) => {
    setCurve('curve', {
      ...curve,
      [property]: value
    })
  }

  const handlePredefinedCurve = (e) => {
    if (e && e.target.value !== "custom") {
      setCurve('curve', predefinedCurves[e.target.value]);
    }
    else {
      setPredefinedCurveSelected('custom')
    }
  }

  const renderPredefinedCurves = () => (
    <div className="row">
      <div className="col-md-8">
        <label>Predefined Curves:</label>
        <div className="nes-select">
          <select className="form-control" value={predefinedCurveSelected} onChange={handlePredefinedCurve}>
            <option value="custom" key="custom">Custom</option>
            {                    
                Object.keys(predefinedCurves).map(key => (
                  <option value={key} key={key}>{key}</option>
                ))
            }        
          </select>      
        </div>
      </div>
      <div className="col-md-4">
        <label>Curve type:</label>
        <div className="nes-select">
          <select className="form-control" value={curve.curveType} onChange={(e) => handleChange('curveType', e.target.value)}>
            {
              Object.keys(curveTypes).map(key => (
                <option value={curveTypes[key]} key={curveTypes[key]}>{curveTypes[key]}</option>
              ))
            }
          </select>      
        </div>
      </div>
    </div>
  )
 
  return (
    <>
      { renderPredefinedCurves() }
      <CurvePreview curveType={curve.curveType} exponent={curve.exponent} slope={curve.slope} xShift={curve.xShift} yShift={curve.yShift} />

      <div className="row">
        <div className="col-md-6">
          <label>Slope:</label>
          <input type="number" className="nes-input" value={curve.slope} step="0.01" onChange={(e) => handleChange('slope', +(e.target.value))} />
        </div>
        <div className="col-md-6">
          <label>Exponent:</label>
          <input type="number" className="nes-input" value={curve.exponent} onChange={(e) => handleChange('exponent', +(e.target.value))} />
        </div>        
      </div>

      <div className="row">
        <div className="col-md-6">
          <label>XShift:</label>
          <input type="number" className="nes-input" value={curve.xShift} step="0.01" onChange={(e) => handleChange('xShift', +(e.target.value))} />
        </div>
        <div className="col-md-6">
          <label>YShift:</label>
          <input type="number" className="nes-input" value={curve.yShift} step="0.01" onChange={(e) => handleChange('yShift', +(e.target.value))} />
        </div>
      </div>   
    </>
  );
}

export default CurveEditor;
