import React, { Component } from 'react'
import './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'


class Person extends Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {

        return (
            <Auxiliary>
                <p key="1" onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
                <p key="2">{this.props.children}</p>

                <input key="3"
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    type="text" onChange={this.props.changed}
                    value={this.props.name}>

                </input>
            </Auxiliary>
        )

    }

}

export default Person