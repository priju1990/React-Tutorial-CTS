import React from 'react';
class Player extends React.Component {

    constructor(props)
    {
        super(props)
         this.state={voteCounter :this.props.votes}
         this.updateVotes= this.updateVotes.bind(this)
         this.downvote= this.downvote.bind(this)
         
    }

/*
    componentWillMount(){
        console.log("Counter :"+this.state.voteCounter)
        this.setState({voteCounter : this.props.votes})
        
        console.log("Counter after:"+this.state.voteCounter)
    
    } */
    updateVotes(){
        console.log("Vote for "+ this.props.name+" "+this.state.voteCounter)
               
        this.setState({ voteCounter: this.state.voteCounter+1})
        console.log(this.props.id +"Vote"+this.state.voteCounter)
        this.props.updateOrder(this.props.id,this.state.voteCounter)
     
    }
    downvote() {
        console.log("Vote for "+ this.props.name+" "+this.state.voteCounter)
     
        this.setState({ voteCounter: this.state.voteCounter-1})
        console.log(this.props.id +"Vote"+this.state.voteCounter)
        this.props.updateOrder(this.props.id,this.state.voteCounter)
       
    }

    render() { 
        
        return (



                     <tr> 
                      <td>
                        {this.props.name}
                        </td>
                        <td>
                        
                        {this.props.votes}
                        </td>
                        <td>
                            <img src={this.props.image} ></img>
                        </td>
                        <td>
                            <button onClick={this.updateVotes} > Upvote</button>
                            <button onClick={this.downvote}  >  Downvote</button>
                        </td>
                        </tr>

               
            
          );
    }
}
 
export default Player;