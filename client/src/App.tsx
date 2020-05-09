import React, { useEffect} from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import history from './history';
import Home from './pages/Home';
import ConditionEvaluator from './pages/ConditionEvaluator';

import { loadConditionEvaluators } from './actions/conditionEvaluatorActions';
import { loadDecisions } from './actions/decisionActions';
import { loadDecisionSets } from './actions/decisionSetActions';

import 'bootlaterus/dist/css/bootlaterus-cfonts.min.css';
import './overrides.css';
import Header from './components/Header';


const App = ({ loadConditionEvaluators, loadDecisions, loadDecisionSets }) => {
  useEffect(() => {
    loadConditionEvaluators();
    loadDecisions();
    loadDecisionSets();
  }, [loadConditionEvaluators, loadDecisions, loadDecisionSets])

  return (         
    <Router history={history}>      
      <Header />
      <div className="m-navbar-side-left-lg">
        <div className="container"> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/c" exact component={ConditionEvaluator} />
          </Switch>
        </div>
      </div>
    </Router>    
  );
}

export default connect(null, { loadConditionEvaluators, loadDecisions, loadDecisionSets })(App);
