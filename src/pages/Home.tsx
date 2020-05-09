import React from 'react';
import { Link } from 'react-router-dom';
import withLayout from '../wrappers/withLayout';

const Home = () => (
  <>    
    <Link to='/c' className="btn btn-primary">Conditions</Link>    
  </>
)

export default withLayout(Home, 'Home');
