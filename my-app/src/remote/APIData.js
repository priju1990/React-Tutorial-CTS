import React from 'react';
import axios from 'axios';
import UserDetail from './userDetail';

class RemoteAPIData extends React.Component {

    constructor (props){
        super(props)
        this.state ={
            users : []
        }
    }

    renderUserDetails(){
       
       return this.state.users.map((user) => {
            return (<UserDetail
                    key={user.id} 
                    name={user.name}
                    email={user.email}
                    >
                    </UserDetail>)
        })
    }
  
    getRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users").
        then((response)=> {
            this.setState({users: response.data})
            console.log(this.state.users);
        })
    }
    componentWillMount(){
      this.getRemoteData()
  }
    render() { 
        return ( 
            <table border="1">
                <tbody>
                <tr><th>Name</th>
                <th>Email</th></tr>
         {this.renderUserDetails()}
         </tbody>
            </table>
         );
    }
}
 
export default RemoteAPIData;