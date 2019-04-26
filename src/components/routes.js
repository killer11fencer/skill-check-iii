import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import Wizard from './Wizard/Wizard'
import WizardStep1 from
import House from './House'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        
        <Route path ='/wizard' component={Wizard}/>
        <Route path ='/wizard/step1' component={}
    </Switch>
)