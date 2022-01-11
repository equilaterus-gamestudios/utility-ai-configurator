import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Titlebar, Color } from 'custom-electron-titlebar';
import history from './history';
import Home from './pages/Home';
import ConditionEvaluators from './pages/ConditionEvaluators';
import EditConditionEvaluator from './pages/EditConditionEvaluator';
import Decisions from './pages/Decisions';
import EditDecision from './pages/EditDecision';
import DecisionSets from './pages/DecisionSets';
import EditDecisionSet from './pages/EditDecisionSet';
import { usePrivateActions } from './hooks/usePrivateActions';
import { useEffect } from 'react';


// Custom title bar
export const titlebar = new Titlebar({
	backgroundColor: Color.fromHex('#000'),
  icon: `${process.env.PUBLIC_URL}/icon.png`
});

const App = () => {
  const { onLoadRuntimeDialog } = usePrivateActions();
  
  useEffect(() => { 
    onLoadRuntimeDialog(); 
  }, [] );

  return (
    <Router history={history}>              
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ConditionEvaluators" exact component={ConditionEvaluators} />
        <Route path="/EditConditionEvaluator/:tag?" exact component={EditConditionEvaluator} />
        <Route path="/Decisions" exact component={Decisions} />
        <Route path="/EditDecision/:tag?" exact component={EditDecision} />
        <Route path="/DecisionSets" exact component={DecisionSets} />
        <Route path="/EditDecisionSet/:tag?" exact component={EditDecisionSet} />
      </Switch>
    </Router>  
  );
}

export default App;
