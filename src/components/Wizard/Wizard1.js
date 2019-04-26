import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor() {
        super();
        
     
    }
  


    render() { 
        return(
            <div>
                <Link to='/'><button>Cancel</button></Link>
                <div>image URL <input name='name'onChange={this.handleChanges}></input></div>
                
                <Link to='/'><button>Next</button></Link>
            </div>
        )
    }
}
export default Wizard