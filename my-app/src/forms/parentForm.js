import React from 'react';
import ChildForm from './childForm';
class ParentForm extends React.Component {
    
    
    constructor(props){
        super(props)
        this.state= {textValue:""}
        //bind the function that accesses the state var
        this.captureInputField= this.captureInputField.bind(this)
    }
    //onchange has an event obj associated. It is a json obj 
    captureInputField(myEvent)
    {
        //target is the input text box and target.value gives the val of the text
        console.log(myEvent.target.value)
        this.setState({textValue : myEvent.target.value})

    }
    render() { 
        return ( 
            <div>
                Parent Form
                <input type="text" onChange={this.captureInputField} ></input>
                U entered :{this.state.textValue}
                <hr></hr>
                <ChildForm callCaptureInputFromChild= {this.captureInputField}> </ChildForm>
            </div>
         );
    }
}
 
export default ParentForm;