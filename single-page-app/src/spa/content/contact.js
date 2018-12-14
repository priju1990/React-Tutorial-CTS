import React from 'react';
import {CSSTransition} from "react-transition-group"
class Contact extends React.Component {
   
    render() { 
        return (  
            <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="myFadeClass"
            enter={false}
          >
          <div>
              Im contact details
          </div>
          </CSSTransition>
        );
    }
}
 
export default Contact;