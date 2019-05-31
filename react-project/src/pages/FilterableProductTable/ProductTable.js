import React, {Component} from 'react';
import "./ProductTable.css";
import TableBody from "./TableBody";


class ProductTable extends Component {
    render() {
        let products = this.props.products;
        let filterData = {};
        products.forEach((item) => {
            var flag = item.name.toLowerCase().includes(this.props.filterText.toLowerCase().trim());
            if (flag) {
                item.stocked = !this.props.inStockOnly;
                if (filterData[item.category]) {
                    filterData[item.category].push(item);
                } else {
                    filterData[item.category] = [item];
                }
            }
        })
        return (
            <div className="table">
                <div className="thead">
                    <div className="th">名称</div>
                    <div className="th">价格</div>
                </div>
                <TableBody data={filterData}/>
            </div>
        );
    }
}

export default ProductTable;