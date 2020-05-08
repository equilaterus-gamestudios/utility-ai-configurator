import React, { useMemo} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { useForm } from '../../hooks/useForm';
import { Curve } from '../../common/models';

const POLINOMIAL = "POLINOMIAL";
const range = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

const polinomialFunction = (exponent, slope, xShift, yShift) => x =>  {
  return slope * Math.pow(x, exponent) - yShift + xShift;
}

const gaussianFunction = (exponent, slope, xShift, yShift) => x =>  {
  return exponent * Math.exp(-slope * Math.pow((x - xShift) / yShift, 2));  
}

const CurvePreview = ({curveType, exponent, slope, xShift, yShift}) => { 
  const calculateData = () => {
    let curveFunction;
    if (curveType === POLINOMIAL) {
      curveFunction = polinomialFunction(exponent, slope, xShift, yShift);
    } else {
      curveFunction = gaussianFunction(exponent, slope, xShift, yShift);
    }
    const data = range.map(x => ({x, y: curveFunction(x), max: 1.0, min: 0.0 }))

    return data
  }  
  
  const data = useMemo(
    () => calculateData()
    , [curveType, exponent, slope, xShift, yShift]
  );
   
  return (
    <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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
  defaultCurve: Curve,
}

const CurveEditor = ({defaultCurve} : CurveProps) => {
  const [curve, setCurveProperty] = useForm(defaultCurve);
 
  return (
    <>
    <CurvePreview curveType={curve.curveType} exponent={curve.exponent} slope={curve.slope} xShift={curve.xShift} yShift={curve.yShift} />
        <label>Curve Type</label><select onChange={(e)=>setCurveProperty('curveType',e.currentTarget.options[e.currentTarget.selectedIndex].value)}><option value="POLINOMIAL">Polinomial</option><option value="GAUSSIAN">Gaussian</option></select>     
        <label>Exponent</label> <input type="number" defaultValue="1" min="-2" step="1" onChange={(e)=>setCurveProperty('exponent',parseFloat(e.target.value))} />
        <label>Slop</label>     <input type="number" defaultValue="1" step="0.01"       onChange={(e)=>setCurveProperty('slope',parseFloat(e.target.value))} />
        <label>XShift</label>   <input type="number" defaultValue="1" step="0.01"       onChange={(e)=>setCurveProperty('xShift',parseFloat(e.target.value))} />
        <label>YShift</label>   <input type="number" defaultValue="1" step="0.01"       onChange={(e)=>setCurveProperty('yShift',parseFloat(e.target.value))} />      
    </>
  );
}

export default CurveEditor;
