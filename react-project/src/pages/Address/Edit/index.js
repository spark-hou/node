import React, {Component} from 'react';
import './index.css';
import NavBar from "../../../components/NavBar";

class Edit extends Component {
    render() {
        return (
            <div>
                <NavBar title="编辑地址"/>
                {/*表单*/}
                <form className="form" action="">
                    <div className="form-group">
                        <label>姓名:</label>
                        <input className="input-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>手机:</label>
                        <input className="input-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>省份:</label>
                        <select className="input-control" name="">
                            <option value="">山东</option>
                            <option value="">河北</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>城市：</label>
                        <select className="input-control" name="">
                            <option value="">青岛</option>
                            <option value="">济南</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>区县：</label>
                        <select className="input-control" name="">
                            <option value="">城阳</option>
                            <option value="">李沧</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>详细地址:</label>
                        <textarea className="input-control">

                        </textarea>
                    </div>
                </form>
                <div className="setDefalut">
                    <p>设为默认收货地址</p>
                    <div className="toggle">
                        <i className='iconfont icon-back'/>
                    </div>
                </div>
                {/*保存*/}
                <button className="saveBtn" type="button">保 存</button>
            </div>
        );
    }
}

export default Edit;