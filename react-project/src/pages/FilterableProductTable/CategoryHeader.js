import React, {Component} from 'react';

class CategoryHeader extends Component {
    render() {
        return (
            <div className="category">{this.props.name}</div>
        );
    }
}

export default CategoryHeader;