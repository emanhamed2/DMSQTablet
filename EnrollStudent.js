import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, } from 'react-native';
import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { CheckBox, Item, Input, Icon } from 'native-base';
import Bar from 'react-native-bar-collapsible';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class EnrollStudent extends React.Component {



    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>



                    <View style={styles.main}>

                        <View>
                            <Text style={styles.textStyle}>Select a Course</Text>
                        </View>
                        <View>
                            <ModalDropdown

                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 40, width: 300, marginRight: 100, paddingLeft: 2, marginTop: 15 }}
                                options={['CP1820', 'CP1530', 'CP3700']}
                                textStyle={{ fontSize: 20 }}
                                dropdownTextStyle={{ fontSize: 20 }}

                            />

                        </View>
                    </View>




                    <View style={styles.main}>
                        <View>
                            <Text style={styles.textStyle}>Search for a Student</Text>
                        </View>
                        <View>
                            <TextInput
                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 40, width: 300, marginRight: 100, paddingLeft: 2, marginTop: 30 }}
                                underlineColorAndroid='transparent'
                                placeholder="Search"
                            />
                        </View>
                    </View>

                    <View style={styles.main}>
                    <View style={styles.boxstyle}>
                            <Ionicons name="md-checkmark-circle" size={30} style={{ color: 'green',marginTop:35, marginRight:15 }} />
                        </View>

                        <View>
                            <TextInput
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30, marginTop: 30 }}
                                underlineColorAndroid='transparent'
                            />
                            
                            </View>
                            <View>
                            <Ionicons name="md-add-circle" size={30} style={{ color: 'black',marginTop:35, marginLeft:-15 }} />
                        </View>

                    </View>

                    <View style={styles.main1}>
                    <View style={styles.main}>
                        <View style={{ height: 40, width: 300, backgroundColor: 'white', paddingLeft: 10, marginRight: 30, marginTop: 15 }}>
                            <Text style={styles.textStyle1}>60054987.CP1810</Text>
                        </View>
                        <View>
                            <Ionicons name="md-close-circle" size={30} style={{ color: 'red',marginTop:20, marginLeft:-130 }} />
                        </View>
                        </View>
                        <View style={styles.main}>
                        <View style={{ height: 40, width: 300, backgroundColor: 'white', paddingLeft: 10, marginRight: 30, marginTop: 15 }}>
                            <Text style={styles.textStyle1}>60054987.CP1810</Text>
                        </View>
                        <View>
                            <Ionicons name="md-close-circle" size={30} style={{ color: 'red',marginTop:20, marginLeft:-130 }} />
                        </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonsText}>Submit</Text>

                    </TouchableOpacity>



                </KeyboardAvoidingView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',

    },

    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flexDirection: 'row',
        marginLeft: 80
    },

    main1: {
        marginLeft: 80,
        marginRight:30
    },
    dropdown: {

        height: 100,
        marginTop: 10,
        backgroundColor: 'white',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 30,
        width: 150,
        borderRadius: 20,

    },

    buttonsText: {

        color: 'white',
        fontSize: 25,


    },
    textStyle: {
        textAlign: 'left',
        marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width: 260,
        marginTop: 5,

    },
    textStyle1: {
        textAlign: 'left',
        marginLeft: -10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        width: 260,
        marginTop: 10,

    },

    searchBox: {
        backgroundColor: 'white',
        padding: 5,
        width: 200,
        height: 50,
        marginTop: 10,
        marginLeft: 15,
        borderColor: 'black',
        borderWidth: 1


    },
    boxstyle:{
        marginLeft: -90,

    }

});
