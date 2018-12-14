import React from 'react';
class Daughter extends React.Component {
   
    render() { 
        return (  
            <div> Im  a daughter!! My name is {this.props.name}</div>
        );
    }
}
 
export default Daughter;