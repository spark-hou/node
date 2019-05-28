import React from 'react';

import './App.css';

let name = "黄米";
let person = {
    name: "黄小米",
    age: 30,
    sex: 1,

};
let students = [
    {
        id: 1,
        name: "黄虾米",
        score: 98,
        age: 23,
        sex: 0,
    },
    {
        id: 2,
        name: "黄渤",
        score: 80,
        age: 23,
        sex: 1,
    },
    {
        id: 3,
        name: "黄小明",
        score: 58,
        age: 1,
        sex: 0,
    },
    {
        id: 4,
        name: "黄磊",
        score: 100,
        age: 2,
        sex: 1,
    }
];

function isOld(age) {
    return age < 18 ? '未成年' : '成年';
}

function list() {
    return (
        <ul>
            {
                students.map(function (item, index) {
                    return (
                        <li key={index}>{item.name}:{item.score}:{isOld(item.age)}</li>
                    );
                })
            }
        </ul>
    );
}

console.log(list());

function clickHandle(name) {
    person.age = person.age + 1;
}

function Login(props) {
    return (<p>登陆之后,{props.username}</p>)
}

class Logout extends React.Component {
    render() {
        return (<p>退出登录 {this.props.username}</p>)
    }
}

function Row(props) {
    return (
        <tr key={props.item.id}>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.sex == 0 ? "男" : "女"}</td>
            <td>{props.item.score}</td>
            <td>
                <button type="button">编辑</button>
                <button type="button">删除</button>
            </td>
        </tr>
    )
}

function TableHand() {
    return (
        <tr>
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>分数</th>
            <th>操作</th>
        </tr>
    )
}

function App() {
    return (
        <div className="App">

            <button type='button' onClick={(e) => clickHandle("哈哈哈")}> 按钮</button>
            <Logout username="logout"/>
            <Login username="dsdsd"/>
            < span> {person.age}
</span>
            {
                person.age > 35 ? '中年' : '青年'

            }
            {list()}
            <table className="table">
                <thead>
                <TableHand/>
                </thead>
                <tbody>
                {
                    students.map(function (item, index) {
                        return (
                            <Row index={index} item={item}/>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
