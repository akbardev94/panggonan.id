import React, { Component } from "react";

import InputNumber from "elements/Form/InputNumber";

export default class Example extends Component {
    state = {
        value: "1"
    };

    handleChange = e => {
        this.setState ({[e.target.name]: e.target.value});
    };

    render() { 
        console.log(this.state.value);
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-auto">
                    <InputNumber max={30} suffix="  Night" isSuffixPlural onChange={this.handleChange} name="value" value={this.state.value} />
                </div>
            </div>            
        </div>
    );
}
}