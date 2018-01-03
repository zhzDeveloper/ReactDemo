import React from 'react';

// 1. 函数式 (无状态组件)
// function Welcome(props) {
//     return <h1> Hello, {props.name} </h1>
// }

// function App() {
//     return (
//         <div>
//             <Welcome name = "aaaa" />
//             <Welcome name = "bbbb" />
//             <Welcome name = "cccc" />
//         </div>
//     )
// }

// 2. ES6 class
// class Welcome extends React.Component {
//     render() {
//         return (
//             <h1> Hello, {this.props.name1} </h1>
//         )
//     }
// } 

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Welcome name1 = "ss" />
//                 <Welcome name1 = "zhz2" />
//                 <Welcome name1 = "zhz3" />
//             </div>
//         )
//     }
// }

// 3. ES5-写法 React.createClass
// const Welcome = (props) => {
//     return <h1> Hello, {this.props.name} </h1>
// }

// const App = React.createClass ({
//     render() {
//         return (
//             <div>
//                 <Welcome name1 = "ss" />
//                 <Welcome name1 = "zhz2" />
//                 <Welcome name1 = "zhz3" />
//             </div>
//         )
//     }
// });
 
class Welcome extends React.Component {
    render() {
        return (
            <h1 onClick={this.props.onChange} > Hello, {this.props.name} </h1>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        }
    }

    changeText() {
        this.setState((preState, props) => ({
            selected: !preState.selected
        }))
    }
    
    render() {
        return (
            <div>
                <Welcome name= {this.state.selected ? "zhz3-selected" : "zhz3" } onChange={() => this.changeText()} />
                <h1 onClick={() => this.changeText()}> {this.state.selected ? "zhz3-selected" : "zhz3" } </h1>
            </div>
        )
    }
}

export default App;
