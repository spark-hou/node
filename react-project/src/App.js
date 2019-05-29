import React from 'react';
import './lib/reset.css';
import './App.css';

let name = "黄米";
let person = {
    name: "黄小米",
    age: 30,
    sex: 1,

};


function isOld(age) {
    return age < 18 ? '未成年' : '成年';
}

// function list() {
//     return (
//         <ul>
//             {
//                 students.map(function (item, index) {
//                     return (
//                         <li key={index}>{item.name}:{item.score}:{isOld(item.age)}</li>
//                     );
//                 })
//             }
//         </ul>
//     );
// }


function clickHandle(name) {
    person.age = person.age + 1;
    console.log("参数" + name)
}

function Login(props) {
    return (<p>登陆之后,{props.username}</p>)
}

class Logout extends React.Component {
    render() {
        return (<p>退出登录 {this.props.username}</p>)
    }
}

class Row extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{formatesex(this.props.item.sex)}</td>
                <td>{this.props.item.score}</td>
                <td>
                    <button type="button">编辑</button>
                    <button type="button" onClick={() => {
                        this.delHandle(this.props.index)
                    }}>删除
                    </button>
                </td>
            </tr>
        )
    }

    delHandle = (index) => {
        this.props.onRemove(index);
    };
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

function formatesex(sex) {
    let res = '';
    switch (sex) {
        case 1:
            res = "男";
            break;
        case 2:
            res = "女";
            break;
        case 3:
            res = "未知";
            break;
    }
    return res;
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.clickHandle.bind(this, 100)}>按钮</button>
                <div className={this.state.isActive ? "box1 active" : "box1"}>
                    box
                </div>
            </div>

        )
    }

    clickHandle = (i) => {
        console.log("参数" + i);
        this.setState((state, props) => {
            return {
                isActive: !state.isActive,
            }
        })
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            name: "spark",
            timer: '',
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000)
    }

    //卸载前生命周期
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello,{this.state.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

class StudentTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "黄虾米",
                    score: 98,
                    age: 23,
                    sex: 3,
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
                    sex: 3,
                },
                {
                    id: 4,
                    name: "黄磊",
                    score: 100,
                    age: 2,
                    sex: 1,
                }
            ],
        };
    }

    delRow = (index) => {
        console.log('删除' + index);
        this.setState((state, props) => {
            let {students} = state;
            students.splice(index, 1);
            return {
                students,
            }
        })
    };

    render() {
        return (
            <table className="table">
                <thead>
                <TableHand/>
                </thead>
                <tbody>
                {
                    this.state.students.map((item, index) => {
                        return (
                            <Row key={item.id} index={index} item={item} onRemove={this.delRow}/>
                        )
                    })
                }
                </tbody>
            </table>
        )

    }
}

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "23",
            sex: "0",
            education: "本科",
        };
    }

    usernameChange = (e) => {
        console.log(e.target);
        this.setState({

            username: e.target.value,

        })
    }
    sexChange = (e) => {
        console.log(e.target);
        this.setState({

            sex: e.target.value,

        })
    }
    educationChange = (e) => {
        console.log(e.target);
        this.setState({

            education: e.target.value,

        })
    }

    render() {
        let {sex, education} = this.state;
        return (
            <div>
                <form action="">
                    <div className="form-control">
                        <label htmlFor="">账户：</label>
                        <input type="text" value={this.state.username} onChange={this.usernameChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">密码：</label>
                        <input type="password"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">性别：</label>
                        <label htmlFor="">
                            <input type="radio" name="sex" onChange={this.sexChange} value="0" checked={sex === "0"}/>
                            男
                        </label>
                        <label htmlFor="">
                            <input type="radio" name="sex" onChange={this.sexChange} value="1" checked={sex === "1"}/>
                            女
                        </label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">学历：</label>
                        <select name="" value={education} onChange={this.educationChange}>
                            <option value="研究生">研究生</option>
                            <option value="本科">本科</option>
                            <option value="专科">专科</option>
                            <option value="大专">大专</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

// 表格-----------------------------------------------------------------------------------------------------
// 表格容器
class TableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form:[
                {
                    id:1,
                    name:'张一',
                    age:'23',
                },
                {
                    id:2,
                    name:'张2',
                    age:'45',
                },          {
                    id:3,
                    name:'张3',
                    age:'34',
                },          {
                    id:4,
                    name:'张4',
                    age:'76',
                },
            ],
            name:'',
            age:'',
        };
    }
    delRow=(index)=>{
        console.log(index);
        this.setState((state,props)=>{
            let {form}=state;
            form.splice(index,1);
            return{
                form
            }
        })
    }
    render() {
        return (
            <div className="table-container">
                <div className="box">
                    <InputForm/>
                    <TableForm form={this.state.form} delRow={this.delRow}/>
                    <div className="search">
                        <label htmlFor="">搜索:</label>
                        <input type="text" placeholder="姓名" id="nameSearch"/>
                        <button type="button" id="search">搜索</button>
                        <label htmlFor="">排序:</label>
                        <button type="button" id="ageSort">年龄从小到大排序</button>
                    </div>
                </div>
            </div>
        )
    }
}
// form组件
class TableForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //
    //     }
    // }
    render() {
        return(
            <form action="">
                <table border="1" cellPadding="10">
                    <thead>
                    <tr className="thead">
                        <th className="h1">ID</th>
                        <th className="h2">姓名</th>
                        <th className="h3">年龄</th>
                        <th className="h3">操作</th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
                    {
                        this.props.form.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td><p onClick={()=>{
                                        this.props.delRow(index)
                                    }}>删除</p></td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
            </form>
        )
    }
}
//添加组件
class InputForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //
    //     }
    // }
    render() {
        return(
            <div className="add">
                <label htmlFor="">添加:</label>
                <input type="text" id="name" placeholder="姓名" value={}/>
                <input type="text" id="age" placeholder="年龄"/>
                <button type="button" id="add">添加</button>
                <label htmlFor="">变色:</label>
                <button type="button" id="colorChange">移入变色:关</button>
            </div>
        )
    }
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
            {/*{list()}*/}
            <StudentTable/>
            {/*分割线*/}
            <Clock/>
            <Toggle/>
            <Register/>
            {/*表格分割线*/}
            <TableContainer/>
        </div>
    );
}

export default App;
