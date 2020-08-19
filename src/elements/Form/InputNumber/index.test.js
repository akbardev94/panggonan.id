import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
    state = {
        value: ""
    };

    handleChange = e => {
        this.setState({value: e.target.value });
    };

    render() {
        return (
            <InputNumber max={30} onChange={this.handleChange} name="value" value={this.state.value} /> 
        );
    }
}

const setup = () => {
    const { container } = render(<TestInput/>);
    const input = container.querySelector(`input.form-control[name='value']`);

    return {
        input
    };
};

test("Should able to change value", () => {
    const { input } = setup();

    fireEvent.change(input, { target: {value: 23} });
    console.log(input.value);
    expect(input.value).toBe("23");
});

test("Should not be able change when reach max value", () => {
    const { input } = setup();

    fireEvent.change(input, { target: {value: 33} });
    expect(input.value).toBe("");
});
