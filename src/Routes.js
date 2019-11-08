import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import Wizard2 from './Components/Wizard/Wizard2';
import Wizard3 from './Components/Wizard/Wizard3';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
        <Route path='/wizard2' component={Wizard2}/>
        <Route path='/wizard3' component={Wizard3}/>
    </Switch>
)