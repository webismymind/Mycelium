

import React from 'react';
import Component from '../Component';

import {TextInput} from 'react-native';


export default class extends Component {

    render() {
        return <TextInput {...this.props} underlineColorAndroid={this.props.underlineColorAndroid || 'transparent'} />
    }


}