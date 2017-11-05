import React from 'react';
import {View,Text} from 'react-native';

import Component from './Component';

export default class extends Component {

    constructor(props) {
        super(props);
        this.views = {};
        this.state = {
            active : <View></View>
        };
        this.history = [];
    }

    registerView(name,component) {
        this.views[name] = component;
        if (this.props.defaultView === name ) {
            this.switchView(this.props.defaultView, this.props.defaultProps || {});
        }
    }

    switchView(name, props) {
        let active = this.views[name];
        this.setState({active: React.createElement(active,props)});
        this.history.push({name:name, parameters:props});
    }

    hasHistory() {
        return this.history.length > 1;
    }

    goBack() {
        if (this.history.length > 1) {
            let lastMove = this.history[this.history.length - 2];
            let active = this.views[lastMove.name];

            this.setState({active: React.createElement(active, lastMove.parameters)});
            this.history.splice(this.history.length - 1, 1);
        }
    }

    render() {
        return this.state.active || <View />;
    }
}