import React, { Component } from 'react';
import testDataJsonArray from '../data/test-data.json';

export default class DataComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qList: testDataJsonArray
        }
    }


    render() {
        return (
            <div>
                {this.state.qList[0].qText}
            </div>
        )
    }
}
