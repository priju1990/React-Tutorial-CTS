import React from 'react';
import ReactDOM from 'react-dom'
class Lifecyle extends React.Component {

    constructor(props){
        super(props)
        this.state= {
            dummyVar :0
        }

        this.changeState= this.changeState.bind(this)
    }
    //has the components been mounted to the DOM
    componentDidMount(){
        
        console.log("Cmpt mounted & Value:"+this.state.dummyVar);
    }

      //this is invoked just before component is mounted
      //all initializations are dine here. That has to take place before dom is rendered
      //the increamented value will not be available in this render cycle. It will be avaialble only after it is renderd
    componentWillMount(){
     console.log(this.state.dummyVar)
        this.setState({dummyVar:this.state.dummyVar+1})
        console.log(this.state.dummyVar)
        console.log("Cmpt will mount &value is" + this.state.dummyVar);
    }

    //component updates when state associated with it changes
    componentDidUpdate(){
        console.log("component will update because of state change")

    }

    componentWillUpdate(){
        console.log("component updated because of state change")
    }

    //when a component is unmounted from view
    componentWillUnmount(){
        console.log("component unmounted for 10 clicks")
    }
changeState(){
    this.setState({
        dummyVar:this.state.dummyVar+1
    })

    if(this.state.dummyVar >10){
        ReactDOM.unmountComponentAtNode(document.getElementById("life"))
    }
}
    
    render() { 
        return ( 
            <div>
            <div>
                Exploring component life cycle
            </div>
            <button onClick={this.changeState}> Change state</button>
            </div>
         );
    }
}
 
export default Lifecyle;