import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Button, RadioButton } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';
import { Radio } from 'native-base';

export default class InstructorGradePage extends React.Component {




    render() {


        return (
            <ScrollView>
                <ScrollView horizontal={true}>
                    <View style={styles.container} >

                        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


                            <View style={styles.main}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}  > Work Detail CP1818 </Text>
                                <TextInput placeholder="Quiz one"
                                style={styles.box}
                                    underlineColorAndroid='transparent'
                                />
                                <TextInput placeholder="Date start"
                                style={styles.textInput1}
                                    underlineColorAndroid='transparent'
                                />
                                <TextInput placeholder="Date End"
                                style={styles.textInput1}
                                    underlineColorAndroid='transparent'
                                />
                                <TextInput placeholder="Date "
                                style={styles.textInput1}
                                    underlineColorAndroid='transparent'
                                />
                            </View>
                            <View>
                                <Text style={{ paddingTop: 30 }}>Q1 Write a Java program that..... </Text>
                                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                                    <Text >Grade: </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ paddingRight: 10 }}>0</Text>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={true}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>1</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>2</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>3</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>4</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                    </View>
                                </View>
                                <Text style={{ paddingTop: 30 }}>Feedback: </Text>
                                <TextInput placeholder="Q01 Feedback "
                                  style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View>
                                <Text style={{ paddingTop: 30 }}>Q2 What is the..... </Text>
                                <Text style={{ paddingTop: 30 }}>Answer: </Text>
                                <TextInput placeholder="it depends on the value of loop counters in the calling "
                                   style={styles.textInput2}
                                    underlineColorAndroid='transparent'
                                />
                                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                                    <Text >Grade: </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ paddingRight: 10 }}>0</Text>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={true}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>1</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>2</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>3</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>4</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                    </View>
                                </View>
                                <Text style={{ paddingTop: 30 }}>Feedback: </Text>
                                <TextInput placeholder="Q02 Feedback "
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View>
                                <Text style={{ paddingTop: 30 }}>Q3 Write Python program that..... </Text>
                                <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                                    <Text >Grade: </Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ paddingRight: 10 }}>0</Text>
                                        <Radio
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={true}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>1</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>2</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                        <Text style={{ paddingLeft: 10 }}>3</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />

                                        <Text style={{ paddingLeft: 10 }}>4</Text>
                                        <Radio style={{ paddingLeft: 20 }}
                                            color={"#f0ad4e"}
                                            selectedColor={"#5cb85c"}
                                            selected={false}
                                        />
                                    </View>
                                </View>

                                <Text style={{ paddingTop: 30 }}>Feedback: </Text>
                                <TextInput placeholder="Q03 Feedback "
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                            <View style={{marginBottom:30}}>
                                <Text style={{ paddingTop: 30, fontWeight: 'bold' }}>Feedback: </Text>
                                <TextInput placeholder="Document Feedback "
                                    style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                />
                            </View>

                        </KeyboardAvoidingView>

                    </View>
                </ScrollView>
            </ScrollView>
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
        paddingTop: Constants.statusBarHeight,

    },

    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 80,
        marginRight: 80,

        // paddingRight: 85,
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
        marginTop: 30,
        width: 150,
        height: 50,
        marginRight: 610,
        borderRadius: 20,
        justifyContent: 'center'

    },

    buttonsText: {

        color: 'white',
        fontSize: 20,


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
    textInput:{
        height: 150, 
        width: 850, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingLeft: 10, 
        marginTop: 10 
    },
    textInput1:{
        height: 40, 
        width: 130, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingLeft: 10, 
        marginLeft: 49 

    },
    textInput2:{
        height: 50, 
        width: 850, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingLeft: 10, 
        marginTop: 10 
    },
    box:{
        height: 40, 
        width: 130, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth: 1, 
        paddingLeft: 10, 
        marginLeft: 50 
    },



});
