import React from 'react';
class UserDetail extends React.Component {

    render() { 
        return (
                     <tr> 
                         <td>
                        {this.props.name}
                        </td>
                        <td>
                        {this.props.email}
                        </td>
                        </tr>

               
            
          );
    }
}
 
export default UserDetail;