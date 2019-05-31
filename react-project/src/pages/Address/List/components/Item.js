import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './Item.css'

class Item extends Component {
    render() {
        let {data} = this.props;
        return (
            <li className="item">
                <div className="content">
                    <div className="receiver">
                        <span className="name">{data.name}</span>
                        <span className="tel">{data.tel}</span>
                    </div>
                    <div className="address">
                        {data.province} {data.city} {data.area} {data.street}
                    </div>
                </div>
                <div className="action-box">
                    <div className="default">
                        <label htmlFor="default">
                            <input name="default" id="default" type="radio"/> 设为默认
                        </label>
                    </div>
                    <div className="action">
                        <Link to={'/address/edit/' + data.id} className="edit">
                            <i className="iconfont icon-bianji"></i>
                            <span>编辑</span>
                        </Link>
                        <span className="delete">
                            <i className="iconfont icon-delete"></i>
                            <span>删除</span>
                        </span>
                    </div>
                </div>
            </li>
        );
    }
}

export default Item;