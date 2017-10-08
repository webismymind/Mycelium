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
        if (this.props.defaultView) {
            this.switchView(this.props.defaultView, this.props.defaultProps || {});
        }
    }

    registerView(name,component) {
        this.views[name] = component;
    }

    switchView(name, props) {
        let active = this.views[name];
        this.setState({active: React.createElement(active,parameters || {})});
        this.history.push({name:name, parameters:parameters});
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
        return (<View>
            {this.state.active}
        </View>);

    }
}