import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './index.css';

import NavBar from "../../../components/NavBar";
import Item from "./components/Item";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                id: 1,
                name: "黄小米",
                tel: '15863008280',
                province: '山东省',
                city: "青岛市",
                area: "李沧区",
                street: "重庆中路100号",
                isDefault: 1,
            }]
        }
    }

    render() {
        let {list} = this.state;
        return (
            <div className="address">
                <NavBar title="收货地址"/>
                {/*地址列表*/}
                <ul className="list">
                    {
                        list.map(function (item, index) {
                            return (<Item key={item.id} data={item}/>)
                        })
                    }
                </ul>
                <Link to='/address/add' className="add-btn">
                    添加新地址
                </Link>
            </div>
        );
    }
}

export default List;