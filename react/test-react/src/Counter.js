import { div } from "prelude-ls";
import React from "react";
import PropTypes from 'prop-types';

class Counter extends React.Component{
    static propTypes = {
        onclick: PropTypes.func,
    }
    state = {

    }
    render(){

        return (
            <div onClick={this.props.onClick}>
                Counter
            </div>
        );
    }
} 

export default Counter;