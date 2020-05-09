import React, { useEffect} from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import history from './history';
import Home from './pages/Home';
import ConditionEvaluator from './pages/ConditionEvaluator';

import { loadConditionEvaluators } from './actions/conditionEvaluatorActions';
import { loadDecisions } from './actions/decisionActions';
import { loadDecisionSets } from './actions/decisionSetActions';
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
      <div className="m-navbar-side-left-sm">
        <div className="pt-5 d-block d-sm-none">&nbsp;</div>
        <div className="container overflow-auto">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ConditionEvaluators" exact component={ConditionEvaluator} />
            <Route path="/Decisions" exact component={ConditionEvaluator} />
            <Route path="/DecisionSets" exact component={ConditionEvaluator} />
          </Switch>
        </div>
      </div>
    </Router>    
  );
}

export default connect(null, { loadConditionEvaluators, loadDecisions, loadDecisionSets })(App);
