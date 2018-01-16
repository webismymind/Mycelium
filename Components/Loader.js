
import React from 'react';

import Component from './Component';
import { Easing, StyleSheet, Text, View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible : false,
            style : {},
            rotate: new Animated.Value(0),
            opacity: new Animated.Value(0),
            spinner :  <Icon name="spinner" size={26} color="black" />,
            message : ''

        }
    }

    componentDidMount() {
        var runAnimation = () => {
            this.state.rotate.setValue(0);
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 100,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver:true
                }
            ).start(() => { runAnimation()});
        };
        runAnimation();
    }

    //Todo Documentation..
    setMessage = (message) => {
        this.setState({message});
    };

    setStyle = (style) => {

        //check content..
        let autorizedValues = ['overlay', 'box'];
        for(let i in style) {

            if (autorizedValues.indexOf(i)  < 0) {
                throw new TypeError('setStyle of Loader only accept '+ JSON.stringify(autorizedValues));
            }
        }
        this.setState({style:style});
    };

    setSpinner = (spinner) => {
        this.setState({spinner:spinner});
    };

    show = () => {
        this.setState({isVisible: true});
        Animated.timing( this.state.opacity, {toValue: 1, duration: 200,useNativeDriver:true}).start();
    };

    hide = () => {
        Animated.timing( this.state.opacity, {toValue: 0, duration: 200,useNativeDriver:true}).start(() => {
            this.setState({isVisible: false});
        });
    };

    render() {

        const interpolatedRotateAnimation = this.state.rotate.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg']
        });

        if( this.state.isVisible) {
            return (
                <Animated.View style={[styles.box, this.state.style.overlay || {}, { opacity: this.state.opacity}]}>
                    <View style={[styles.inner,this.state.style.box || {}]}>
                        <Animated.View  style={{alignItems:'center', transform: [{ rotate: interpolatedRotateAnimation }] }}>
                            {this.state.spinner}
                        </Animated.View>
                        {this.state.message !== "" && <Text style={[styles.message,this.state.style.message || {}]}>{this.state.message}</Text>}
                    </View>
                </Animated.View>
            )
        }
        else {
            return null;
        }
    }

}

const styles = StyleSheet.create({
    box : {
        position: 'absolute',
        top:0,
        left: 0,
        backgroundColor:'rgba(0,0,0,.8)',
        right:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },
    inner : {
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
    },
    message : {
        marginTop:20
    },

});

