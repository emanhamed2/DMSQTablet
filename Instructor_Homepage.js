
import React, { Component } from 'react';
import { Container, Header, Content, Button, Form, Item, Left, Right, Input, Body, Titl, List, ListItem } from 'native-base';
import { AppRegistry, Text, CheckBox, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import InstructorGradePage from './InstructorGradePage';

import NavInstructor from './NavInstructor';

import Bar from 'react-native-bar-collapsible';


export default class Instructor_Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            tableHead: [' Course  ', 'Type', 'Work', 'Start', 'Due', 'End', 'Submitted', 'New'],
            widthArr1: [96, 96, 96, 96, 96, 96, 96, 96],

            tableData: [
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz one', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz one', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Quiz one', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Quiz one', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP3450-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Quiz Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2870-2', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Lab Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Test Two', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP2700-2', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Test One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],
                ['CP1880-1', 'Assignment One', 'CIS', 'Sep 05', '-', 'Dec 07', '5', '1'],


            ],


            tableHead2: [' Name ', 'Student Id', 'Time', 'Files', 'Work Grade', 'Course Grade', 'GPA'],
            widthArr2: [109.5, 109.5, 109.5, 109.5, 109.5, 109.5, 109.5],


            tableData2: [
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],
                ['Aya', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Maya', '6002', 'Sep 10 12:20', '1', '40 60%', '60/60 100%', '4.0'],
                ['Zara', '6010', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '1.3'],
                ['Farah', '6005', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '3.3'],
                ['Aya', '6002', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.3'],
                ['Aliya', '6025', 'Sep 10 16:20', '5', '30 60%', '60/60 100%', '2.9'],

            ]
        }
    }
    render() {
        const state = this.state;

        return (
            <ScrollView style={styles.dataWrapper}>
{/* 
                <View  >
                    <NavInstructor />

                </View> */}


                <View style={{ paddingTop: 30 }}>
                    <Bar style={{ backgroundColor: 'white' }} titleStyle={{ fontSize: 24, color: 'black' }} collapsible={true} showOnStart={true}
                        iconCollapsed='chevron-right' iconOpened='chevron-down' tintColor='black' iconSize={20} title='Course Works ' >
                        <View style={styles.tableone}>
                            <Table borderStyle={{ borderColor: 'white' }} >
                                <Row data={state.tableHead} widthArr={state.widthArr1} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper2}>
                                <Table borderStyle={{ borderColor: 'white' }}>
                                    {
                                        <Rows widthArr={state.widthArr1} data={state.tableData} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>
                        </View>
                    </Bar>
                    <Bar style={{ backgroundColor: 'white' }}
                        titleStyle={{ fontSize: 24, color: 'black' }}
                        collapsible={true}
                        showOnStart={true}
                        iconCollapsed='chevron-right'
                        iconOpened='chevron-down'
                        tintColor='black'
                        iconSize={20}
                        title='Work Submitted'
                    >

                        <View style={styles.tableone}>
                            <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row',paddingRight:600 }}>
                            <CheckBox
                                        value={this.state.checked}
                                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={{ marginTop: 5 }}>Show All Students</Text>
                                </View>
                            </View>
                            <Table borderStyle={{ borderColor: 'white' }} >
                                <Row data={state.tableHead2} widthArr={state.widthArr2} style={styles.header} textStyle={styles.htext} />
                            </Table>
                            <ScrollView style={styles.dataWrapper2}>
                                <Table borderStyle={{ borderColor: 'white' }} >
                                    {
                                        <Rows widthArr={state.widthArr2} data={state.tableData2} style={styles.row}
                                            textStyle={styles.text} />
                                    }
                                </Table>
                            </ScrollView>

                        </View>
                    </Bar>
                    <View  >
                        <InstructorGradePage />

                    </View>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 100,
        // backgroundColor: 'yellow',
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        alignItems: 'center',
    },
    container2: {
        paddingTop: 50,
        paddingBottom: 100,
        // backgroundColor: 'olive',
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
    header: {
        height: 50,
        backgroundColor: '#76323f',
        width: "100%"
    },
    htext: {
        fontWeight: 'bold',
        alignSelf: "center",
        color: 'white'
    },
    text: {
        textAlign: 'center',
    },


    dataWrapper: {
        marginTop: -1
    },
    dataWrapper2: {
        marginTop: -1,
        height: 100,
    },
    row: {
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'center',

    },
    tableone: {
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#E9E9E9',
        borderBottomWidth: 1.5,
        alignItems: 'center',
    },
    tabletwo: {
        borderColor: '#E9E9E9',
        borderBottomWidth: 1.5,
        //  alignItems: 'center',
    },

    header2: {
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 10,
        fontSize: 20,
        justifyContent: 'space-between'
    },
    inputfeilds: {
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40,
        borderColor: '#c2c2c2',
        borderRadius: 4,
        borderWidth: 1.5,
        width: 100,
        color: '#f9f9f9',
        marginLeft: 10,

    },

    workdetails: {
        height: "100%",
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 30,
        flexDirection: 'column',
        paddingRight: 300,
        paddingLeft: 220,
    },
    workdetail_H: {
        height: "100%",
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 30,
        flexDirection: 'row',
        paddingRight: 300,
        paddingLeft: 500,
    },

    // barstyle:{
    //     backgroundColor: '#E9E9E9',
    //     fontWeight: 'bold',
    //     color: 'white'
    // }
});

