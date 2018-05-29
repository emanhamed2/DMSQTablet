import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



export default class Reset extends React.Component {


    render() {

        return (
            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />
                        <View>
                            <Text style={styles.textStyle}>Reset Password</Text>
                            
                            <TextInput placeholder="Confirm Password"
                            style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18}}
                            underlineColorAndroid='transparent'
                           
                          />  
                            <Text style={{color:'red',paddingLeft:22}}>Invalid password</Text>  

                          <TextInput placeholder="Confirm New Password"
                          style={{height: 40, width:300, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18,marginTop:15}}
                          underlineColorAndroid='transparent'
                         
                        />  
                          <Text style={{color:'red',paddingLeft:22}}>Invalid password</Text>  
                        </View>
                        <TouchableOpacity style={styles.button}>

                            <Text style={styles.buttonsText}>Reset</Text>

                        </TouchableOpacity>
                    </View>
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
        width: 170,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
   
    },

    box: {
        flex: 1,
        width: 500,
        height: 100,
        marginTop: 10,
        backgroundColor: 'white',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    inputfeilds: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'left',
        width: 200,
        borderWidth: 1,
        color: 'black',
        marginTop: 10,
        backgroundColor: 'white',
        fontSize: 20,
    },


    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 30,
        width: 100,
        borderRadius: 20,
        marginLeft:10,

    },
    buttonsText: {

        color: 'white',
        fontSize: 25,


    },


    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width:300,
        marginTop:25,
       marginBottom:10,


    },
 

});
