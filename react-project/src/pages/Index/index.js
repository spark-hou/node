import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
class Index extends Component {
    render() {
        return (
            <div>
                h3主页
               <NavLink to="/calculator">
                   go
               </NavLink>
            </div>
        );
    }
}

export default Index;