/**
 * A Class used as the root view of the app. Contain some ui like alert modales, history view system etc.
 */
import React from 'react';

import Component from './Component';
import { StyleSheet, Text, View } from 'react-native';
import TempNotification from'./TempNotification';
import Stack from'../Utils/Stack';
import Loader from './Loader';

export default class extends Component {

    constructor(props) {
        super(props);
        Stack.setItem('rootApp', this);
    }

    fireTempNotification = (text, milliseconds, style) => {
        this.tempNotification.fire(text,milliseconds,style);
    };

    showLoader = () =>{
        this.loader.show();
    };

    hideLoader = () => {
        this.loader.hide();
    };

    render() {
        return (
            <View style={this.props.style}>
                <View>
                    {this.props.children}
                </View>
                <TempNotification ref={(component) => {this.tempNotification = component}} />
                <Loader ref={(component) => {this.loader = component}}/>
            </View>
        )
    }
}