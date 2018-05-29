import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import p1 from './Images/p1.png';

export default class StudentProfile extends React.Component {
    render() {
        return (
            <View style={styles.profileContainer}>
                <Image style={styles.img} source={require('./Images/p1.png')} />
                <Text style={styles.imglabel}> Edit Image  </Text>
                <View style={styles.inline}>
                    <Text style={styles.titles}> Name  </Text>
                    <View style={styles.nametxtview}>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Name' />
                    </View>
                </View>
                <View style={styles.inline}>
                    <Text style={styles.titles}> Email  </Text>
                    <View style={styles.emailtxtview}>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Email' />
                    </View>
                </View>
                <View style={styles.inline}>
                    <Text style={styles.titles}> Phone  </Text>
                    <View style={styles.phonetxtview}>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Phone' />
                    </View>
                </View>
                <View style={styles.inline}>
                    <Text style={styles.titles}> DOB  </Text>
                    <View style={styles.DOBtxtview}>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='Edit Date of Birth' />
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonsText}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // backgroundColor: '#e9e9e9',
        // justifyContent:'center',s
        // width: "100%",
        // height: "100%",
        // alignItems: 'center',
        // padding: 16,
        paddingTop: 23
    },
   
    profileContainer: {
        marginLeft: 180,
        marginTop: 20,
        marginBottom: 20
    },
   
    inline: {
        flexDirection: 'row',
        width: '15%',
        marginRight: 640,
        marginLeft: 20
        // marginBottom:'50%'
    },
    titles: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7,
        height: 40
    },
    inputfeilds: {
        backgroundColor: '#e9e9e9',
        height: 40,
        width: 200,
        marginLeft: 1
    },
    nametxtview: {
        marginLeft: 20
    },
    emailtxtview: {
        marginLeft: 21
    },
    phonetxtview: {
        marginLeft: 15
    },
    DOBtxtview: {
        marginLeft: 31
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#76323f",
        padding: 10,
        marginTop: 10,
        width: 100,
        borderRadius: 35,
        marginLeft: 160,
        height: 40,
        marginBottom: 10
    },

    buttonsText: {
        color: 'white',
        fontSize: 15,
        paddingBottom: 13
    },
   
    img: {
        borderRadius: 150,
        marginLeft: 130,
        height: 130,
        width: 130,
        marginTop:20
    },
    imglabel: {
        marginLeft: 155,
        marginBottom: 25,
        marginTop: 5,
        fontSize: 18,
        color: "#76323f"
    }

})
