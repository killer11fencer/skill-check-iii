import React, {Component} from 'react'

class House extends Component {
    render() {
        return(
            <div>
                <img src={this.props.info.img} alt='house'/>
               <div>Property Name:{this.props.info.name}</div> 
               <div>address:{this.props.info.address}</div> 
               <div>City:{this.props.info.City}</div> 
               <div>State:{this.props.info.State}</div> 
               <div>Zip:{this.props.info.Zip}</div> 
               <button>Delete</button>

            </div>
        )
    }
}
export default House