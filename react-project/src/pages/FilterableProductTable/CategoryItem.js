import React, {Component} from 'react';

class CategoryItem extends Component {
    render() {
        return (
            <div className="item">
                <div className="td">{this.props.item.name}</div>
                {this.props.item.stocked ? <div className="td">{this.props.item.price}</div> : ''}
            </div>
        );
    }
}

export default CategoryItem;