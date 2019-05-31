import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./index.css";

class TabBar extends Component {
    render() {
        return (
            <div className="tabBar">
                <ul>
                    <li>

                        <NavLink to="/" exact>
                            <i className="icon icon-home"></i>
                            <div>首页</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/address/list" exact>
                            <i className="icon icon-category"></i>
                            <div>分类</div>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/address/add" exact>
                            <i className="icon icon-shopCar"></i>
                            <div>购物车</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/address/edit" exact>
                            <i className="icon icon-center"></i>
                            <div>我的卷皮</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TabBar;