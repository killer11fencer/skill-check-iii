import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {ADDHOUSE} from '../../ducks/store'

class Wizard extends Component {
    constructor() {
        super();
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
       
    }
    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({ mortgage: reduxState.mortgage,
                rent: reduxState.rent
    })
})
}
    addHouse = () =>
    store.dispatch({
        type: ADDHOUSE})

        
    handleChanges = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value})
    }

    render() { 
        
        let rent = this.state.mortgage * 1.25
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div>Recommended Rent ${rent}</div>
                <div>Mortgage: <input name='mortgage'onChange={this.handleChanges}></input></div>
                <div>Rent:<input name='rent' onChange={this.handleChanges}></input></div>
                <Link to='/wizard/step1'><button>Previous</button></Link>
                <Link to='/'><button onClick={this.addHouse}>Complete</button></Link>
            </div>
        )
    }
}
export default Wizard