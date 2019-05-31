import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ],
            filterText: "",
            inStockOnly: false,
        }
    }

    InputChangeHandle = (e) => {
        this.setState({
            filterText: e.target.value
        });
    };
    checkChangeHandle = () => {
        this.setState(function (prevState) {
            return {
                inStockOnly: !prevState.inStockOnly
            }
        })
    };

    render() {
        return (
            <div className="container">
                <SearchBar keyword={this.state.filterText} isShow={this.state.inStockOnly}
                           onCheckChange={this.checkChangeHandle}
                           onInputChange={this.InputChangeHandle}/>
                <ProductTable {...this.state}/>
            </div>
        );
    }
}

export default FilterableProductTable;