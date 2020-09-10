import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tab } from '../redux/actions'
import TestSon1 from "../components/TestSon1"
import TestSon2 from "../components/TestSon2"
import "../styles/Login.scss"

export const { Provider,Consumer } = React.createContext("默认名称");



const mapStateToProps = state => {
    return {
        ...state,
        curIndex: state.curIndex
    }
};


const mapDispatchToProps = dispatch => {
    return {
        handleClick: index => {
            console.log(1)
            dispatch(tab(index));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val1: 10,
            val2: 20,
        };
    }
    render() {
        return (
            <Provider value={this.state.val1}>
                <div id="login_container">
                    I'm Login div
                    <TestSon1 val2={this.state.val2} addVal1={this.addVal1.bind(this)}/>
                    <TestSon2 val2={this.state.val2} addVal2={this.addVal2.bind(this)}/>
                </div>
            </Provider>
        )
    }
    addVal1(val1) {
        this.setState({
            ...this.state,
            val1: this.state.val1 + val1
        });
    }
    addVal2(val2) {
        this.setState({
            ...this.state,
            val2: this.state.val2 + val2
        });
    }
    componentDidMount() {

    }
}

export default Login