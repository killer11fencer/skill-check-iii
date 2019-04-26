import React, {Component} from 'react'


class House extends Component {
    render() {
        return(
            <div>
                <img src={this.props.info.img} alt='house'/>
               <div>Property Name:{this.props.info.name}</div> 
               <div>address:{this.props.info.address}</div> 
               <div>City:{this.props.info.city}</div> 
               <div>State:{this.props.info.state}</div> 
               <div>Zip:{this.props.info.zip}</div> 
               
               <button onClick={e => this.props.delete(this.props.info.id)}>Delete</button>

            </div>
        )
    }
}
export default House