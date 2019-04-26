import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import Wizard from './Wizard'
import House from './House'

export default (
    <Switch>
        <Route exact path='/' component={Header}/>
        <Route component={Dashboard}/>
        <Route path ='/wizard' component={Wizard}/>
        <Route component={House}/>
    </Switch>
)