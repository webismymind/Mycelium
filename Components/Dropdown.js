import React from 'react';

import Component from './Component';
import { Easing, StyleSheet, Text, View, Animated ,TouchableOpacity,ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stack from'../Utils/Stack';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});

class DropdownModale extends Component {


    onItemSelected = (value) => {
        let callback = this.props.onItemSelected || function() {};
        callback(value);
        Stack.getItem('rootApp').dropdownModale.hide();
    }

    render() {
        return (
            <View style={styles.modaleWrapper}>
                <TouchableOpacity style={styles.closeModale} onPress={()=> {Stack.getItem('rootApp').dropdownModale.hide();}}>
                    <Icon name="times" color='grey' size={15} />
                </TouchableOpacity> 
                <Text style={styles.modalTitle}>{this.props.title || 'Select an option'}</Text>
                <ListView
                        style={styles.list}
                        dataSource={this.props.choices}
                        enableEmptySections={true}
                        renderRow={(rowData) => { return (
                            <TouchableOpacity style={styles.listItem} onPress={() => {this.onItemSelected(rowData)}}>
                                <Text>{ rowData.label}</Text>
                            </TouchableOpacity>
                        );
                }} />
            </View>
        );
    }

}

export default class extends Component {
    
    constructor(props) {
        super(props);
       
    }

    onItemSelected = (value) => {
        let callback = this.props.onChange || function() {};
        callback(value);
    }

    selectValue = () => {
        let choices = ds.cloneWithRows(this.props.choices);
        Stack.getItem('rootApp').dropdownModale.setContent(<DropdownModale title={this.props.title || false} value={this.props.value} choices= {choices} onItemSelected={this.onItemSelected} />);
        Stack.getItem('rootApp').dropdownModale.show();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.selectValue} style={styles.button}>
                {typeof this.props.value !== 'undefined' &&<Text style={{color:(this.props.color || 'black')}} >{this.props.value.label}</Text>}
                {typeof this.props.value === 'undefined' &&<Text style={styles.placeholder}>{this.props.placeholder || 'Select a value'}</Text>}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    modaleWrapper: {
        backgroundColor:'white',
        //padding:10,
    },
    button : {
        padding:5,
    },
    placeholder: {
        color:'grey',
    },
    closeModale : {
        position:'absolute',
        right:10,
        top:10,
        zIndex:10,
    },
    list : {
        marginTop:40,
        borderTopWidth:1,
        borderTopColor:'#eeeeee'
    },
    listItem: {
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee'
    },
    modalTitle: {
        position:'absolute',
        left:10,
        top:10,
        right:30,
        color:'grey',

    }
});

