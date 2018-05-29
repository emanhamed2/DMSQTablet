import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Button, RadioButton } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants } from 'expo';
import { Radio } from 'native-base';

export default class StudentExam extends React.Component {




    render() {


        return (
            <ScrollView>
                <ScrollView horizontal={true}>
                    <View style={styles.container} >

                        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>


                            <View style={styles.main}>
                                <Text style={{fontWeight: 'bold', fontSize: 15,paddingRight:50}}  > Work Detail  </Text>
                                <Text style={{fontWeight: 'bold', fontSize: 15,paddingLeft:5 }}  >  CP1818 </Text>
                                <Icon style={{marginLeft:60}}name='calendar'/>
                                <Text style={styles.textDate}  > Start Date </Text>
                                <Text style={styles.textDate1}  > Jan20.2018 11:30PM </Text>
                                <Icon style={{marginLeft:60}}name='calendar'/>
                                <Text style={styles.textDate2} > Due Date </Text>
                                <Text style={styles.textDate1}  > Jan25.2018 11:30PM </Text>
                               
                                
                            </View>
                            <View style={styles.middle}>
                                <Text style={{ paddingTop: 80 }}>Q1 Write a Java program that..... </Text>
                                <View style={{ flexDirection: 'row', paddingTop: 20 }}>
                                   
                                </View>
                                <Text >Answer: </Text>
                                <TextInput placeholder="enter Answer "
                                  style={styles.textInput}
                                    underlineColorAndroid='transparent'
                                />
                                <View>
                                 <TouchableOpacity style={styles.button}>
                                 
                                      <Text style={styles.buttonsText}>Update</Text>
                                                           
                                 </TouchableOpacity>
                                     </View>       
                            </View>

                            <View style={styles.middle}>
                            <Text style={{ paddingTop: 10 }}>Q2 Write a Java program that..... </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                               
                            </View>
                            <Text >Answer: </Text>
                            <TextInput placeholder="enter Answer "
                              style={styles.textInput}
                                underlineColorAndroid='transparent'
                            />
                            <View>
                             <TouchableOpacity style={styles.button}>
                             
                                  <Text style={styles.buttonsText}>Update</Text>
                                                       
                             </TouchableOpacity>
                                 </View>       
                        </View>
                        <View style={styles.middle}>
                            <Text style={{ paddingTop: 10 }}>Q3 Write a Java program that..... </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                               
                            </View>
                            <Text >Answer: </Text>
                            <TextInput placeholder="enter Answer "
                              style={styles.textInput}
                                underlineColorAndroid='transparent'
                            />
                            <View>
                             <TouchableOpacity style={styles.button}>
                             
                                  <Text style={styles.buttonsText}>Update</Text>
                                                       
                             </TouchableOpacity>
                                 </View>       
                        </View>

                        <View style={styles.middle}>
                            <Text style={{ paddingTop: 10 }}>Q4 Write a Java program that..... </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                               
                            </View>
                            <Text >Answer: </Text>
                            <TextInput placeholder="enter Answer "
                              style={styles.textInput}
                                underlineColorAndroid='transparent'
                            />
                            <View>
                             <TouchableOpacity style={styles.button}>
                             
                                  <Text style={styles.buttonsText}>Update</Text>
                                                       
                             </TouchableOpacity>
                                 </View>       
                        </View>

                        <View>
                             <TouchableOpacity style={styles.button1}>
                             
                                  <Text style={styles.buttonsText}>Submit</Text>
                                                       
                             </TouchableOpacity>
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
        marginLeft: 90,
        marginRight: 80,

        // paddingRight: 85,
    },
    middle:{
        marginLeft: 100,
        marginRight: 80,
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
        marginTop: 20,
        width: 100,
        height: 40,
        marginLeft:690,
        borderRadius: 20,
        justifyContent: 'center'

    },
    button1: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        marginTop: 30,
        width: 100,
        height: 40,
        // marginLeft:50,
        borderRadius: 20,
        marginBottom:50,
        justifyContent: 'center',
        marginLeft:5

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
        width: 800, 
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
        marginLeft: 88 

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
        marginLeft: 100 
    },
    textDate:{
        fontSize:15,
        fontWeight:'bold',
        color:'green',
        // paddingLeft:20,
    },
    textDate1:{
        fontSize:15,
        fontWeight:'bold',
        
    },
    textDate2:{
        fontSize:15,
        fontWeight:'bold',
        color:'red',
    }



});
