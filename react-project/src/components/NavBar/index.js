import React, {Component} from 'react';
import './index.css';
//历史记录
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

class NavBar extends Component {
    goBack = () => {
        history.goBack();
    };
    render() {
        let {title} = this.props;

        return (
            <header className='navBar'>
                <div onClick={this.goBack} className="arrow-left">
                    <i className="iconfont icon-back"/>
                </div>
                <div className="content">
                    {title}
                </div>
            </header>
        );
    }
}

export default NavBar;