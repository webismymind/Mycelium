/**
 * A Class used as the root view of the app. Contain some ui like alert modales, history view system etc.
 */
import React from 'react';

import Component from './Component';
import { StyleSheet, Text, View } from 'react-native';
import TopAlert from'./TopAlert';
import Stack from'../Utils/Stack';

export default class extends Component {

    constructor(props) {
       super(props);
        Stack.setItem('rootApp', this);
    }


    fireTopAlert = (text, color, milliseconds) => {
        this.topAlert.fire(text,color,milliseconds);
    };

    render() {
        return (
            <View style={this.props.style}>
                <TopAlert ref={(component) => {this.topAlert = component}} />
                <View>
                    {this.props.children}
                </View>
            </View>
        )
    }

}