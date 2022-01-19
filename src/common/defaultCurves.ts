import { curveTypes } from './Global';
import { Curve } from './models';

const basicLineal : Curve = { curveType: curveTypes.LINEAR, slope: 1.0, exponent: 0.0, xShift: 0.0, yShift: 0.0 };
const basicQuadricLowerLeft : Curve = { curveType: curveTypes.POLYNOMIAL, slope: 1.0, exponent: 4.0, xShift: 1.0, yShift: 0.0 };
const basicQuadricLowerRight : Curve = { curveType: curveTypes.POLYNOMIAL, slope: 1.0, exponent: 4.0, xShift: 0.0, yShift: 0.0 };
const basicQuadricUpperLeft : Curve = { curveType: curveTypes.POLYNOMIAL, slope: -1.0, exponent: 4.0, xShift: 1.0, yShift: 1.0 };
const basicQuadricUpperRight : Curve = { curveType: curveTypes.POLYNOMIAL, slope: -1.0, exponent: 4.0, xShift: 0.0, yShift: 1.0 };
const inverseLinear : Curve = { curveType: curveTypes.LINEAR, slope: -1.0, exponent: 0.0, xShift: 0.0, yShift: 1.0 };
const constant : Curve = { curveType: curveTypes.LINEAR, slope: 0.0, exponent: 0.0, xShift: 0.0, yShift: 0.5 };
const cooldown : Curve = { curveType: curveTypes.POLYNOMIAL, slope: 1.0, exponent: 6.0, xShift: 0.0, yShift: 0.0 };
const runtime : Curve = { curveType: curveTypes.POLYNOMIAL, slope: -1.0, exponent: 6.0, xShift: 0.0, yShift: 1.0 };
const basicLogistic : Curve = { curveType: curveTypes.LOGISTIC, slope: 1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };
const inverseLogistic : Curve = { curveType: curveTypes.LOGISTIC, slope: -1.0, exponent: 1.0, xShift: 0.0, yShift: 1.0 };
const basicLogit : Curve = { curveType: curveTypes.LOGIT, slope: 1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };
const inverseLogit : Curve = { curveType: curveTypes.LOGIT, slope: -1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };
const basicNormal : Curve = { curveType: curveTypes.NORMAL, slope: 1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };
const inverseNormal : Curve = { curveType: curveTypes.NORMAL, slope: -1.0, exponent: 1.0, xShift: 0.0, yShift: 1.0 };
const basicSine : Curve = { curveType: curveTypes.SINE, slope: 1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };
const inverseSine : Curve = { curveType: curveTypes.SINE, slope: -1.0, exponent: 1.0, xShift: 0.0, yShift: 0.0 };



export const predefinedCurves = {  
  basicLineal,
  basicQuadricLowerLeft,
  basicQuadricLowerRight,
  basicQuadricUpperLeft,
  basicQuadricUpperRight,
  inverseLinear,
  constant,
  cooldown,
  runtime,
  basicLogistic,
  inverseLogistic,
  basicLogit, 
  inverseLogit,
  basicNormal,
  inverseNormal,
  basicSine,
  inverseSine 
}
