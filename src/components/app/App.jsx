import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';
import List from '../../containers/list/List'
import Detail from '../../containers/detail/Detail'

export default function App() {

 return (
  <>
  <div className="app">

    <Router>
        <Switch>
             <Route exact path="/" component = {List} >
             </Route>
             <Route exact path="/detail/:id" component = {Detail}>
             </Route>
                
        </Switch>
    </Router>
  </div>
</>
  );
  
}
