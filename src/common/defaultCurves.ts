import { Curve } from './models';

const lineal : Curve = {
  curveType: 'POLYNOMIAL',
  exponent: 1,
  slope: 1,
  xShift: 1,
  yShift: 1
};

const linealInverse : Curve = {
  curveType: 'POLYNOMIAL',
  exponent: 1,
  slope: -1,
  xShift: 0,
  yShift: -1
};

const quadratic : Curve = {
  curveType: 'POLYNOMIAL',
  exponent: 2,
  slope: 1,
  xShift: 1,
  yShift: 1
};

const quadraticInverse : Curve = {
  curveType: 'POLYNOMIAL',
  exponent: 2,
  slope: -1,
  xShift: 0,
  yShift: -1
};

const gaussian : Curve = {
  curveType: 'GAUSSIAN',
  exponent: 1,
  slope: 0,
  xShift: 0.5,
  yShift: 0.3
};

const gaussianInverse : Curve = {
  curveType: 'GAUSSIAN',
  exponent: -1,
  slope: -1,
  xShift: 0.5,
  yShift: 0.20
};

const sCurve : Curve = {
  curveType: 'GAUSSIAN',
  exponent: 1,
  slope: 0,
  xShift: 1,
  yShift: 0.5
};

const sCurveInverse : Curve = {
  curveType: 'GAUSSIAN',
  exponent: 1,
  slope: 0,
  xShift: 0,
  yShift: 0.5
};

export const predefinedCurves = {  
  lineal,
  linealInverse,
  quadratic,
  quadraticInverse,
  gaussian,
  gaussianInverse,
  sCurve,
  sCurveInverse
}
