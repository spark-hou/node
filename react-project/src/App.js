import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
//页面级组件
import AddressList from "./pages/Address/List";
import AddressAdd from "./pages/Address/Add";
import AddressEdit from "./pages/Address/Edit";
import TabBar from "./components/TabBar";
import Index from "./pages/Index";
import Calculator from './pages/Calculator';

// function Outer(props) {
//     return (
//         <div className="outer-box">
//             outer-box
//             {props.children}
//         </div>
//     )
// }
class Outer extends Component{
    render() {
        return(
            <div className="outer-box">
                outer-box
                {this.props.children}
            </div>
        )
    }
}
function Inner() {
    return (
        <div className="inner-box">
            inner-box
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">

                <Outer>
                    <Inner></Inner>
                </Outer>
                <Router>
                    <Route path="/" exact component={Index}/>
                    <Route path={['/address/list']} exact component={AddressList}/>
                    <Route path="/address/add" exact component={AddressAdd}/>
                    <Route path="/address/edit/:id" exact component={AddressEdit}/>
                    <Route path="/calculator" exact component={Calculator}/>
                    <TabBar/>
                </Router>

            </div>
        );
    }
}

export default App;
