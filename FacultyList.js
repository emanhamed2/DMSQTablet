import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, Picker } from 'react-native';
import React from 'react';
import Logo from './logo.png'
import { Container, Header, Content, Form, Item, Input, Label, Button, Right } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class FacultyList extends React.Component {

    render() {
        return (
            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.inline}>
                        <Text style={styles.titles}> College ID  </Text>
                        <TextInput underlineColorAndroid='transparent' style={styles.inputfeilds} placeholder='College ID' />
                        <Text style={styles.titles}>Department </Text>
                        <ModalDropdown
                            style={styles.dropdowns}
                            options={['Information Technology', 'Health Sicence', 'Business Studies', 'Engineering Technology']}
                            textStyle={{ fontSize: 18 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <Text style={styles.titles}>Role  </Text>
                        <ModalDropdown
                            style={styles.dropdowns}
                            options={['Instructor', 'Admin']}
                            textStyle={{ fontSize: 20 }}
                            dropdownTextStyle={{ fontSize: 20 }}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonsText}>Search </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.tableInline}>
                            <Text style={styles.tabletitles}>ID </Text>
                            <Text style={styles.tabletitles}>Name </Text>
                            <Text style={styles.tabletitles}>Contact NO </Text>
                            <Text style={styles.tabletitles}>Personal Email </Text>
                            <Text style={styles.tabletitles}>College Email </Text>
                            <Text style={styles.tabletitles}>Department </Text>
                            <Text style={styles.tabletitles}>Role</Text>
                        </View>
                    </View>

                    <View style={styles.tablebody}>
                        <Text style={styles.tableContent}>60076767 </Text>
                        <Text style={styles.tableContent}>Nalin </Text>
                        <Text style={styles.tableContent}>77666655 </Text>
                        <Text style={styles.tableContent}>nalin@nalin.com </Text>
                        <Text style={styles.tableContent}>6001111@cna-qatar </Text>
                        <Text style={styles.tableContent}>IT  </Text>
                        <Text style={styles.tableContent}>Instructor</Text>
                        <Text style={styles.tableContent}>edit</Text>
                        {/* <Text style={styles.tableContent}><FontAwesome>{Icons.chevronLeft}</FontAwesome></Text> */}

                    </View>
                    <View style={styles.tablebody}>
                        <Text style={styles.tableContent}>60076767 </Text>
                        <Text style={styles.tableContent}>Nalin </Text>
                        <Text style={styles.tableContent}>77666655 </Text>
                        <Text style={styles.tableContent}>nalin@nalin.com </Text>
                        <Text style={styles.tableContent}>6001111@cna-qatar </Text>
                        <Text style={styles.tableContent}>IT  </Text>
                        <Text style={styles.tableContent}>Instructor</Text>
                        <Text style={styles.tableContent}>edit</Text>
                    </View>
                    <View style={styles.tablebody}>

                        <Text style={styles.tableContent}>60076767 </Text>
                        <Text style={styles.tableContent}>Nalin </Text>
                        <Text style={styles.tableContent}>77666655 </Text>
                        <Text style={styles.tableContent}>nalin@nalin.com </Text>
                        <Text style={styles.tableContent}>6001111@cna-qatar </Text>
                        <Text style={styles.tableContent}>IT  </Text>
                        <Text style={styles.tableContent}>Instructor</Text>
                        <Text style={styles.tableContent}>edit</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9e9e9',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        // padding: 16,
        paddingTop: 50,
    },
    pic: {
        width: 180,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputfeilds: {
        backgroundColor: 'white', height: 40, width: 80
    },

    inline: {
        flexDirection: 'row',
        width: '15%',
        marginRight: 640,
        marginLeft: 20
        // marginBottom:'50%'

    },
    tableInline: {
        backgroundColor: "#76323f", height: 60, width: 740, flexDirection: 'row',
        // width: '30%',
        marginLeft: 100,
        marginRight: 110,

    },
    button: {
        backgroundColor: "#76323f",
        width: 80,
        height: 35,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 100,
    },
    buttonsText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        paddingTop: 4,
        paddingLeft: 1
        // padding: 3,
    },

    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    text: {
        margin: 6,
        color: 'black'
    },

    titles: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7,
        height: 40
    },
    tabletitles: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 28,
        height: 40,
        color: 'white'
    },
    tableContent: {
        marginTop: 10,
        fontSize: 15,
        marginLeft: 25,
        height: 40,
        color: 'black'
    },
    dropdowns: {
        borderColor: 'black',
        backgroundColor: 'white',
        height: 40,
        width: 150,
        marginLeft: 5,
        paddingLeft: 10
    }
    ,
    tablebody: {
        height: 50,
        width: 300,
        marginLeft: 60,
        marginRight: 530,
        marginTop: 10,
        flexDirection: 'row'
    },
});
