import React from 'react';
class Counter extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            counterValue:0
         }
         //bind the function to the class.
         this.counterUtil = this.counterUtil.bind(this)
    }

    counterUtil(){
        this.setState({counterValue:this.state.counterValue+1})
        console.log("clicked")
    }
   

    
    render() { 
        return ( 
            <div>
                <h2>Counter</h2>
                <button onClick={this.counterUtil}>Click Me</button>
                <br></br>
                I am clicked {this.state.counterValue} times
            </div>
         );
    }
}
 
export default Counter;