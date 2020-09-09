import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tab } from '../redux/actions'

const test1 = ({text1, text2}) => wrappedComponent => {
    wrappedComponent.prototype.text1 = text1;
    wrappedComponent.prototype.text2 = text2;

}
@test1({
    text1: 'hahha',
    text2: 'lalala'
})
class Login extends Component {
    constructor(props) {
        super(props);
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
        console.log(this.text1);
        console.log(this.text2);
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

export default Login