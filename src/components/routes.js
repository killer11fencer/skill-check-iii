import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Dashboard'
import Wizard from './Wizard/Wizard'
import Wizard1 from './Wizard/Wizard1'
import Wizard2 from './Wizard/Wizard2'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        
        <Route exact path ='/wizard' component={Wizard}/>
        <Route path ='/wizard/step1' component={Wizard1}/>
        <Route path ='/wizard/step2' component={Wizard2}/>
    </Switch>
)