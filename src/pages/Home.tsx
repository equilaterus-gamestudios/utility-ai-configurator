import React from 'react';
import { exportConfiguration } from '../actions/exportConfigurationActions';
import withLayout from '../wrappers/withLayout';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const handleExport = (e) => {
    e.preventDefault();
    dispatch(exportConfiguration());
  }
  
  return  <button className="btn btn-primary" onClick={handleExport}>Export</button>;
  
}
export default withLayout(Home, 'Home');
