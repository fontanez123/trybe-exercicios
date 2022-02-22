import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class StrictAccess extends React.Component {
    render() {
        const { username, password } = this.props.user;
        if (username === 'joao' && password === 1234){
            return <p>Welcome joao!</p>;
        } else {
            alert('Access denied');
           return <Redirect to="/" />  
    }
}
}

export default StrictAccess;