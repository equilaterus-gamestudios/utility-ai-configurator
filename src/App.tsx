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
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import { usePrivateActions } from './hooks/usePrivateActions';
import { useEffect } from 'react';
import { useActions } from './hooks/useActions';


// Custom title bar
export const titlebar = new Titlebar({
	backgroundColor: Color.fromHex('#000'),
  icon: `${process.env.PUBLIC_URL}/icon.png`
});

const App = () => {
  const { onLoadRuntimeDialog } = usePrivateActions();
  const { runtime } = useActions();

  useEffect(() => { 
    onLoadRuntimeDialog(); 
  }, [] );

  return (
    <Router history={history}>
    <div className="app">
      <div className="app-contents">
        <SideMenu /><Header />         
        <div className="main-col">
          <div className="pt-5 d-block d-sm-none">&nbsp;</div>            
          <Switch>            
            <Route path="/ConditionEvaluators" exact component={ConditionEvaluators} />
            <Route path="/EditConditionEvaluator/:tag?" exact component={EditConditionEvaluator} />
            <Route path="/Decisions" exact component={Decisions} />
            <Route path="/EditDecision/:tag?" exact component={EditDecision} />
            <Route path="/DecisionSets" exact component={DecisionSets} />
            <Route path="/EditDecisionSet/:tag?" exact component={EditDecisionSet} />
            <Route path="/" exact component={Home} />
          </Switch>
          <span className="file-path">{runtime.projectPath ?? ''} {runtime.changesNotSaved ? '[*]' : ''}</span>
        </div>   
      </div> 
   
    </div>  
    </Router>  
  );
}

export default App;
