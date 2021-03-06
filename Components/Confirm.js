
import React from 'react';

import Component from './Component';
import { Easing, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible : false,
            style : {},
            opacity: new Animated.Value(0),
            content : <View></View>,
            metas : {}

        }
    }


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


    show = (content,metas) => {
        this.setState({isVisible: true, content:content,metas:metas});
        Animated.timing( this.state.opacity, {toValue: 1, duration: 200,useNativeDriver:true}).start();
    };

    hide = () => {
        Animated.timing( this.state.opacity, {toValue: 0, duration: 200,useNativeDriver:true}).start(() => {
            this.setState({isVisible: false});
        });
    };

    cancel = () => {
        let callback = this.props.onCancel || function() {};
        Animated.timing( this.state.opacity, {toValue: 0, duration: 200,useNativeDriver:true}).start(() => {
            this.setState({isVisible: false});
            callback();
        });
    };

    confirm = () => {
        let callback = this.props.onConfirm || function() {};
        Animated.timing( this.state.opacity, {toValue: 0, duration: 200,useNativeDriver:true}).start(() => {
            this.setState({isVisible: false});
            callback(this.state.metas);
        });
    };

    render() {

        if( this.state.isVisible) {
            return (
                <Animated.View style={[styles.box, this.state.style.overlay || {}, { opacity: this.state.opacity}]}>
                    <View style={[styles.inner,this.state.style.box || {}]}>
                        {this.state.content}
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity onPress={this.confirm}  style={[styles.button, this.state.style.button || {}]}>
                                <Text>{this.props.textButton || 'OK'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.cancel}  style={[styles.button, this.state.style.button || {}]}>
                                <Text>{this.props.textCancelButton || 'Cancel'}</Text>
                            </TouchableOpacity>
                        </View>
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
        justifyContent:'center',

    },
    inner : {
        backgroundColor:'white',
        padding:20,
        borderRadius:10,
        shadowOffset:{  width: 0,  height: 0,  },
        shadowColor: 'black',
        shadowOpacity: .8,
    },
    button : {
        backgroundColor: '#eee',
        alignItems:'center',
        padding:10,
        marginTop:20,
        borderRadius:5,
    },
    buttonWrapper : {
        justifyContent:'space-between',
        flexDirection: 'row'
    }

});

