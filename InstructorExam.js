import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView,Button} from 'react-native';
import React from 'react';
import Logo from './logo.png'
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Constants} from 'expo';

export default class InstructorExam extends React.Component {


 
    
    render() {


        return (
            <ScrollView>
            <ScrollView horizontal={true}>
            <View style={styles.container} >
          
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
               
                     
                        <View style={styles.main}>
                           
                            
                            <ModalDropdown 
                            
                                 style={{borderColor:'black', borderWidth:1,backgroundColor:'lightgray',height: 40, width:100,paddingLeft:10,marginRight:3,paddingTop:5}}
                                 options={['Admin','Instructor', 'Student']}
                                 textStyle={{fontSize:20}}
                                 dropdownTextStyle={{fontSize:20}}
                                 defaultValue={"Exam"}
                                
                                 />

                          <TextInput placeholder="Exam Name"
                            style={{height: 40, width:130, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18}}
                            underlineColorAndroid='transparent'
                           
                          /> 
                          <TextInput placeholder="Date start"
                            style={{height: 40, width:130, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18}}
                            underlineColorAndroid='transparent'
                           
                          /> 
                          <TextInput placeholder="Date End"
                            style={{height: 40, width:130, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18}}
                            underlineColorAndroid='transparent'
                           
                          /> 
                          <TextInput placeholder="Date "
                            style={{height: 40, width:130, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:18}}
                            underlineColorAndroid='transparent'
                           
                          /> 
 
                          <ModalDropdown 
                            
                                 style={{borderColor:'black', borderWidth:1,backgroundColor:'lightgray',height: 40, width:100,paddingLeft:7,marginLeft:20,paddingTop:5}}
                                 options={['Admin','Instructor', 'Student']}
                                 textStyle={{fontSize:20}}
                                 dropdownTextStyle={{fontSize:20}}
                                 defaultValue={"Draft"}
    
                                 />
                                 </View>
                             
                                 <View>
                                 <TouchableOpacity style={styles.button}>
                                 
                                      <Text style={styles.buttonsText}>New Question</Text>
                                                           
                                 </TouchableOpacity>
                                     </View>                       
                           <TextInput placeholder="Quiz Quation "
                            style={{height: 300, width:850, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:90,marginTop:30}}
                            underlineColorAndroid='transparent'
                           /> 
                          <TextInput placeholder="FeadBack"
                            style={{height: 250, width:850, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:90,marginTop:30}}
                            underlineColorAndroid='transparent'
                           
                          /> 
                          {/* <TextInput placeholder="FeadBack"
                            style={{height: 250, width:850, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:5,marginTop:30}}
                            underlineColorAndroid='transparent'
                           
                          /> 
                          <TextInput placeholder="FeadBack"
                            style={{height: 250, width:850, backgroundColor:'white', borderColor: 'black', borderWidth: 1,paddingLeft:10,marginLeft:5,marginTop:30}}
                            underlineColorAndroid='transparent'
                           
                          />  */}
                        
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
        paddingTop:Constants.statusBarHeight,
        
    },

    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:90
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
        height:50,
        marginRight:610,
        borderRadius: 20,
        justifyContent:'center'
       
    },

    buttonsText: {

        color: 'white',
        fontSize: 20,


    },
    textStyle: {
        textAlign: 'left',
        marginLeft:3,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width:300,
        marginTop:25,

    },



});
