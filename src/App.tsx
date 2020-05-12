import React, { useEffect} from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import history from './history';
import Home from './pages/Home';
import ConditionEvaluators from './pages/ConditionEvaluators';
import EditConditionEvaluator from './pages/EditConditionEvaluator';
import Decisions from './pages/Decisions';
import EditDecision from './pages/EditDecision';
import DecisionSets from './pages/DecisionSets';
import EditDecisionSet from './pages/EditDecisionSet';

import { loadConditionEvaluators } from './actions/conditionEvaluatorActions';
import { loadDecisions } from './actions/decisionActions';
import { loadDecisionSets } from './actions/decisionSetActions';
import Header from './components/Header';


const App = ({ loadConditionEvaluators, loadDecisions, loadDecisionSets }) => {
  useEffect(() => {
    setTimeout(() => {
      loadConditionEvaluators();
      loadDecisions();
      loadDecisionSets();
    }, 1000);
  }, [loadConditionEvaluators, loadDecisions, loadDecisionSets])

  return (         
    <Router history={history}>      
      <Header />
      <div className="m-navbar-side-left-sm">
        <div className="pt-5 d-block d-sm-none">&nbsp;</div>
        <div className="container main-container overflow-auto">
          <div className="px-3">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/ConditionEvaluators" exact component={ConditionEvaluators} />
              <Route path="/EditConditionEvaluator/:tag?" exact component={EditConditionEvaluator} />
              <Route path="/Decisions" exact component={Decisions} />
              <Route path="/EditDecision/:tag?" exact component={EditDecision} />
              <Route path="/DecisionSets" exact component={DecisionSets} />
              <Route path="/EditDecisionSet/:tag?" exact component={EditDecisionSet} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>    
  );
}

export default connect(null, { loadConditionEvaluators, loadDecisions, loadDecisionSets })(App);
