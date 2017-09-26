
import React from 'react';

import Component from './Component';
import { StyleSheet, Text, View, Animated } from 'react-native';


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message : '',
            delay : 1000,
            slide: new Animated.Value(-50),
            opacity: new Animated.Value(0),
            style : { backgroundColor: '' },
            isVisible: false
        }
    }

    fire = (text,milliseconds,style) => {
        this.setState({
            message : text,
            style: style || {},
            isVisible: true,
            delay : milliseconds || 1000
        });
        Animated.timing( this.state.slide, {toValue: 0, duration: 300}).start();
        Animated.timing( this.state.opacity, {toValue: 1, duration: 300}).start(() => {
            setTimeout(()=> {
                Animated.timing( this.state.slide, {toValue: -50, duration: 300}).start();
                Animated.timing( this.state.opacity, {toValue: 0, duration: 300}).start(() => {
                    this.setState({isVisible:false});
                });

            },this.state.delay);
        });
    };


    render() {
        if( this.state.isVisible) {
            return (
                <Animated.View style={[
                        styles.boxAlert,
                        this.props.style,
                        {
                            backgroundColor: this.state.style.backgroundColor ? this.state.style.backgroundColor :  'rgba(0,0,0,.3)',
                            opacity: this.state.opacity,
                            transform: [ {perspective:850},{ translateY: this.state.slide}]
                        }
                ]}>
                    <Text style={[styles.textAlert, { color : this.state.style.color ? this.state.style.color : 'white'}]}>{this.state.message}</Text>
                </Animated.View>
            )
        }
        else {
            return null;
        }
    }

}

const styles = StyleSheet.create({
    boxAlert : {
        position: 'absolute',
        top: 0,
        padding: 10,
        paddingTop: 25,
        left: 0,
        right: 0,
        alignItems:'center'
    },
    textAlert : {
        color: 'white',
    }
});

