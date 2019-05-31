import React, {Component} from 'react';
import "./TableBody.css";
import CategoryHeader from "./CategoryHeader";
import CategoryItem from "./CategoryItem";


class TableBody extends Component {
    render() {
        let filterData = this.props.data;
        let Category = [];
        for (let key in filterData) {
            let Header = <CategoryHeader key={key} name={key}/>;
            Category.push(Header);
            let CategoryItems = filterData[key].map((item, index) => {
                return (
                    <CategoryItem key={key + index} item={item}/>
                )
            })
            Category.push(CategoryItems);
        }
        return (
            <div className="tbody">
                {Category}
            </div>
        );
    }
}

export default TableBody;