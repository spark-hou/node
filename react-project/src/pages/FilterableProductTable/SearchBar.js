import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>搜索：</label>
                    <input type="email" className="form-control" value={this.props.keyword}
                           onChange={this.props.onInputChange}
                           placeholder="search keywords"/>
                </div>
                <div className="checkbox">
                    <label>
                        <input value={this.props.isShow} onChange={this.props.onCheckChange} type="checkbox"/> only show products in stock
                    </label>
                </div>
            </form>
        );
    }
}

export default SearchBar;