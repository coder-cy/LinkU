import React, { Component } from 'react';
import { Consumer } from '../pages/Login';
import "../styles/TestSon1.scss";


export default class TestSon1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Consumer>
                {
                    (val1) =>
                        <div id="son1_container">
                            I'm TestSon1 div <br/>
                            val1: {val1} <br/>
                            val2: {this.props.val2}
                            <button onClick={() => {this.addVal1()}}>addVal1</button>
                        </div>
                }
            </Consumer>
        )
    }
    addVal1() {
        this.props.addVal1(4)
    }
    componentDidMount() {

    }
}
