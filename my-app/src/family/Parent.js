import React from 'react';

import Son from './son'
import Daughter from './Daughter';
class Parent extends React.Component {
   
    render() { 
        return (  
            <div>
        1.
          <Daughter name="Priya" ></Daughter>
            <Son name="Kiran"></Son>
         2.   From index.js
            <Daughter name={this.props.daughtername} ></Daughter>
            <Son name={this.props.sonname} ></Son>
        3.
            Family name: <i> {this.props.children}</i>
            <Son name={this.props.sonname} ></Son>
            <Daughter name={this.props.daughtername}></Daughter>
            </div>
        );
    }
}
 
export default Parent;