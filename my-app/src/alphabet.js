import React from 'react';
class alphabet extends React.Component {
    
    render() { 

        let someStyle ={
            color: this.props.fcolr,
            backgroundColor : "black"
        }
        return ( <span style= {someStyle} >{this.props.children}</span> );
    }
}
 
export  default  alphabet;