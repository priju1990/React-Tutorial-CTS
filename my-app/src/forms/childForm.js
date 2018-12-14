import React from 'react';
class ChildForm extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                Child Form
                <input type= "text" onChange ={this.props.callCaptureInputFromChild}></input>
            </div>
        );
    }
}
 
export default ChildForm;