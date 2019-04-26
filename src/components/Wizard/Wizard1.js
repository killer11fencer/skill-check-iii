import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {IMG} from '../../ducks/store'

class Wizard extends Component {
    constructor() {
        super();
        const reduxState = store.getState();
        this.state = {
            img: reduxState.img
         }
     
    }
    componentDidMount = () => {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({ img: reduxState.img
    })
})
}
    addImg = () => {
        store.dispatch({
            type: IMG,
            payload: this.state.img
        })
        
    }
    handleChanges = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value})
    }


    render() { 
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div>image URL <input name='img'value={this.state.img} onChange={this.handleChanges}></input></div>
                <Link to='/wizard'><button>Previous</button></Link>
                <Link to='/wizard/step2'><button onClick={this.addImg}>Next</button></Link>
            </div>
        )
    }
}
export default Wizard