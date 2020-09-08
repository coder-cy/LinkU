import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tab } from '../redux/actions'



export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {};
    }
    render() {
        return (
            <div>
                I'm Login div
            </div>
        )
    }
    componentDidMount() {

    }
}

const mapStateToProps = state => {
    return {
        ...state,
        currIndex: state.currIndex
    }
};


const mapDispatchToProps = dispatch => {
    return {
        handleClick: index => {
            dispatch(tab(index));
        }
    }
};

connect(mapStateToProps, mapDispatchToProps)(Login);