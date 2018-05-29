import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Picker } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';

// import { Container, Header, Content, Form, Item, Input, Label, Button,TextInput } from 'native-base';



export default class AdminRegister extends React.Component {



    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


                    <View style={styles.main}>
                        <View>

                            <Text style={styles.textStyle}>College ID</Text>

                            <TextInput
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                placeholder="College ID"
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your College ID</Text>


                        </View>
                        <View>
                            <Text style={styles.textStyle}>Login ID</Text>
                            <TextInput placeholder="Login ID"
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Login ID</Text>
                        </View>
                    </View>
                    <View style={styles.main}>
                        <View>
                            <Text style={styles.textStyle}>Name</Text>

                            <TextInput placeholder="Name"
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Name</Text>
                        </View>
                        <View>
                            <Text style={styles.textStyle}>Contact No.</Text>

                            <TextInput placeholder="Contact No."
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Contact No.</Text>

                        </View>
                    </View>

                    <View style={styles.main}>
                        <View>
                            <Text style={styles.textStyle}>Personal(Recovery)Email</Text>

                            <TextInput placeholder="Personal(Recovery)Email"
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Personal(Recovery)Email</Text>
                        </View>
                        <View>
                            <Text style={styles.textStyle}>College Email</Text>

                            <TextInput placeholder="College Email"
                                style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginRight: 30 }}
                                underlineColorAndroid='transparent'

                            />
                            <Text style={{ color: 'red' }}>Invalid Your College Email</Text>

                        </View>
                    </View>

                    <View style={styles.main}>

                        <View>
                            <Text style={styles.textStyle}>Role</Text>

                            <ModalDropdown

                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 40, width: 300, marginRight: 30, paddingLeft: 10 }}
                                options={['Admin', 'Instructor', 'Student']}
                                textStyle={{ fontSize: 20 }}
                                dropdownTextStyle={{ fontSize: 20 }}

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Role</Text>
                        </View>

                        <View>

                            <Text style={styles.textStyle}>Department</Text>

                            <ModalDropdown

                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 40, width: 300, marginRight: 30, paddingLeft: 10 }}
                                options={['Information Technology', 'Business', 'Engineering', 'Health']}
                                textStyle={{ fontSize: 20 }}
                                dropdownTextStyle={{ fontSize: 15 }}

                            />
                            <Text style={{ color: 'red' }}>Invalid Your Department</Text>

                        </View>

                    </View>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonsText}>Register</Text>

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
        marginLeft: 20
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
        width: 300,
        marginTop: 25,

    },



});
