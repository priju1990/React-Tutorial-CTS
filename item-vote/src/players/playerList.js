import React from "react";
import axios from "axios"; 
import Player from "./player";

class PlayerList extends React.Component{

constructor (props){
    super(props)
    this.state={
      
        players : []
    }

    this.renderUserDetails= this.renderUserDetails.bind(this)
    this.updateRank= this.updateRank.bind(this)

}

renderUserDetails(){
    
       
    return this.state.players.map((player) => {
         return (<Player
            updateOrder={this.updateRank}               
                 id={player.id} 
                 name={player.name}
                 image={player.image}
                 votes={player.votes}
                 >
                 </Player>)
     })
 }

 updateRank(id ,vote){
     console.log("ID"+id+ "Vote "+vote)
    // console.log(this.state.sortedPlayers)
    const newPLayer = this.state.players.map((player)=>{
         if( id ===player.id) {
            
            return Object.assign({},player,{votes :vote})
         }
         else
         return player
     })

   
  this.setState({players:newPLayer})
    console.log(this.state.players);

   const sortedPlayers= this.state.players.sort((a,b)=>(b.votes-a.votes))
  // this.setState({players: sortedPlayers})
   // this.setState({sortedPlayers:this.state.players})
    //console.log("After sorting..."+this.state.players)


}
    getRemoteData(){
        axios.get("http://localhost:3000/players").
        then((response)=> {
            
            this.setState({players: response.data})
            
         // this.setState({sortedPlayers:response.data})
           // console.log("Hello"+this.state.sortedPlayers)
        })
    }

    componentWillMount(){

        this.getRemoteData()
    
    }
    render(){

        const sortedProducts = this.state.players.sort((a, b)=>{
            return a.votes - b.votes
        })
        console.log(sortedProducts)
        const displaySortedProducts=sortedProducts.map((player) => {
            return (<Player
               updateOrder={this.updateRank}               
                    id={player.id} 
                    name={player.name}
                    image={player.image}
                    votes={player.votes}
                    >
                    </Player>)
        })

        return (  
            <div >
              
                {displaySortedProducts}
            </div>
        );
        
    }
}

export default PlayerList;