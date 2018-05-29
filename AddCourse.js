import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, } from 'react-native';
import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { CheckBox, Item, Input, Icon } from 'native-base';
import Bar from 'react-native-bar-collapsible';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class AddCourse extends React.Component {



    render() {

        return (


            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>



                 


                    <View style={styles.main}>
                        <View>
                            <Text style={styles.textStyle}>Course Name</Text>
                        </View>
                        <View>
                            <TextInput
                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white', height: 50, width: 250, marginRight: 100, paddingLeft:2 }}
                                underlineColorAndroid='transparent'
                                placeholder="Course Name"
                            />
                        </View>
                    </View>



                    <View style={styles.main}>

                        <View>
                            <Text style={styles.textStyle2}>Select Instructor</Text>
                        </View>
                        <View>
                            <ModalDropdown

                                style={{ borderColor: 'black', borderWidth: 1, backgroundColor: 'white',height: 50, width: 250, marginRight: 100, paddingLeft: 2, marginTop: 15 }}
                                options={['Doug', 'Fathi', 'Nalin']}
                                textStyle={{ fontSize: 20 }}
                                dropdownTextStyle={{ fontSize: 20 }}

                            />
                            {/* <Ionicons name="md-add-circle" size={30} style={{ color: 'black',marginTop:35, marginLeft:-15 }} /> */}
                            </View> 
                            <View>
                            <Ionicons name="md-add-circle" size={30} style={{ color: 'black',marginTop:20, marginLeft:-90 }} />
                        </View> 
                       
                    </View>


                

                    <View style={styles.main1}>
                    <Text style={styles.textStyle3}>Select a Instructor</Text>
                    <View style={styles.main}>
                    
                        <View style={{backgroundColor: 'white', paddingLeft: 10, marginRight: 30, marginTop: 15 }}>
                            <Text style={styles.textStyle1}>Wajdi
</Text>
                        </View>
                        <View>
                            <Ionicons name="md-close-circle" size={30} style={{ color: 'red',marginTop:30, marginLeft:-220 }} />
                        </View>
                        </View>
                        <View style={styles.main}>
                        <View style={{  backgroundColor: 'white', paddingLeft: 10, marginRight: 30, marginTop: 15 }}>
                            <Text style={styles.textStyle1}>Doug</Text>
                        </View>
                        <View>
                            <Ionicons name="md-close-circle" size={30} style={{ color: 'red',marginTop:25, marginLeft:-220 }} />
                        </View>
                        </View>
                        <View style={styles.main}>
                        <View style={{  backgroundColor: 'white', paddingLeft: 10, marginRight: 30, marginTop: 15 }}>
                            <Text style={styles.textStyle1}>Nalin</Text>
                        </View>
                        <View>
                            <Ionicons name="md-close-circle" size={30} style={{ color: 'red',marginTop:28, marginLeft:-220 }} />
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
        marginTop: 40,
        width: 150,
        borderRadius: 20,

    },

    buttonsText: {

        color: 'white',
        fontSize: 25,


    },
    textStyle: {
        textAlign: 'left',
        // marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width: 260,
        marginTop: 5,
        marginBottom:20,
       

    },
    textStyle1: {
        textAlign: 'left',
        // marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        width: 260,
        marginTop: 10,
        // marginRight:-50
        marginLeft:10
     

    },
    textStyle2: {
        textAlign: 'left',
        // marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#76323f',
        width: 260,
        marginTop: 15,
        marginBottom:20
    },
    textStyle3: {
        // textAlign: 'center',
        marginLeft: 50,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#76323f',
        // width: 260,
        marginTop: 50,

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
