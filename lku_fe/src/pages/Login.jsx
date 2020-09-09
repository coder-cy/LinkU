import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tab } from '../redux/actions'

const mapStateToProps = state => {
    return {
        ...state,
        currIndex: state.currIndex
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
        this.state = {};
    }
    render() {
        return (
            <div onClick={this.props.handleClick}>
                I'm Login div
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Login