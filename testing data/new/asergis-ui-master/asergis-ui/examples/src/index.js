
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './demo';
import Buttons from'./demo/buttons';
import Forms from'./demo/forms';
import Tables from'./demo/tables';
import Heading from'./demo/heading';
import Alphabet from'./demo/alphabet';
import Scrollbar from'./demo/scrollbar';
import ToolTip from'./demo/tooltip';
import ToolsPanel from'./demo/tools-panel';
import Dropdowns from'./demo/dropdowns';
import Preloaders from'./demo/preloaders';
import Pagination from'./demo/pagination';
import Modals from'./demo/modals';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/buttons' component={Buttons}/>
    <Route path='/tables' component={Tables}/>
    <Route path='/forms' component={Forms}/>
    <Route path='/heading' component={Heading}/>
    <Route path='/alphabet' component={Alphabet}/>
    <Route path='/scrollbar' component={Scrollbar}/>
    <Route path='/tooltip' component={ToolTip}/>
    <Route path='/tools-panel' component={ToolsPanel}/>
    <Route path='/dropdowns' component={Dropdowns}/>
    <Route path='/preloaders' component={Preloaders}/>
    <Route path='/pagination' component={Pagination}/>
    <Route path='/modals' component={Modals}/>
  </Switch>
);

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"));