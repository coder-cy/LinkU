import React, { Component } from 'react';
import { Consumer } from '../pages/Login';
import "../styles/TestSon2.scss";


export default class TestSon2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Consumer>
                {
                    (val1) =>
                        <div id="son2_container">
                            I'm TestSon2 div <br/>
                            val1: {val1} <br/>
                            val2: {this.props.val2}
                            <button onClick={() => {this.addVal2()}}>addVal2</button>
                        </div>
                }
            </Consumer>
        )
    }
    addVal2() {
        this.props.addVal2(2)
    }
    componentDidMount() {

    }
}
