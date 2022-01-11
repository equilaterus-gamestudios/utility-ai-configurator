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
import { ipcRenderer } from 'electron';
import { useEffect } from 'react';


// Custom title bar
export const titlebar = new Titlebar({
	backgroundColor: Color.fromHex('#000'),
  icon: `${process.env.PUBLIC_URL}/UtilityAi.ico`
});

// Is dev?
export let isDev: boolean;
const setIsDev = async () => { isDev = await ipcRenderer.invoke('is-dev') as boolean; };


const App = () => {
  // On mount set isDev value
  useEffect(() => {
    setIsDev();
  }, [])

  return (
    <div className='app'>
    <Router history={history}>
      <Header />
      <div className="row">
        <SideMenu />      
        <div className="row">        
          <div className="col">
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
        </div>    
      </div> 
    </Router> 
    </div>   
  );
}

export default App;
