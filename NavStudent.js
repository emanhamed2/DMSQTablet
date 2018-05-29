import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView, } from 'react-native';
import React from 'react';
import { Constants } from 'expo';
import { CheckBox, Item, Input, Icon } from 'native-base';
import Bar from 'react-native-bar-collapsible';
export default class NavStudent extends React.Component {
    state = { checked: true }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image style={styles.image} source={require('./panda.jpeg')} />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={styles.text}>Student Name</Text>
                            <Text style={styles.text}>60087633</Text>
                            <TouchableOpacity>
                                <Text style={styles.text}>My Profile</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.text}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.line}> </Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Icon style={styles.icon} name='square-o' > */}
                        <CheckBox style={styles.checkboxe1}  checked={true} color='black'
                            />
                            <Bar
                        style={{ backgroundColor: '#76323f', marginLeft: 10, width: 230, marginTop: 15, }}
                        title='My Term Course'
                        titleStyle={{ fontSize: 18 }}
                        collapsible={true}
                        showOnStart={false}
                        iconCollapsed='chevron-right'
                        iconOpened='chevron-down'
                        tintColor='white'
                        iconSize={20}
                    >
                    <View>
                        {/* </Icon> */}
                    </View>
                    <View style={{ height: 150 }}>
                        <ScrollView
                            horizontal={false}
                            pagingEnabled={false}
                            automaticallyAdjustInsets={true}
                        >
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox  checked={true} color='black'
                                    />
                                <Text style={styles.text1} > CP1801 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox  checked={true} color='black'
                                    />
                                <Text style={styles.text1} > CP1820 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox  checked={true} color='black'
                                    />
                                <Text style={styles.text1} > CP1803 </Text>
                            </View>
                            <View style={styles.checkboxes} >
                                {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                <CheckBox  checked={true} color='black'
                                    />
                                <Text style={styles.text1} > CP1850 </Text>
                            </View>
                        </ScrollView>
                    </View>
                    </Bar>
                    </View>
                    <Text style={styles.line}> </Text>
                    <View style={{ flexDirection: 'row', }}>
                        {/* <Icon style={styles.icon} name='square-o' > */}
                        {/* <CheckBox style={styles.checkboxe1}  color='white'
                            /> */}
                        {/* <Text style={styles.collaps1} > My Previous Course </Text> */}
                        {/* 
                    </View>
                    <View> */}
                        <CheckBox style={styles.checkboxe2}  checked={true} color='black'
                           />
                        <Bar
                            style={{ backgroundColor: '#76323f', marginLeft: 10, width: 230, marginTop: 20, }}
                            title='My Previous Course'
                            titleStyle={{ fontSize: 18 }}
                            collapsible={true}
                            showOnStart={true}
                            iconCollapsed='chevron-right'
                            iconOpened='chevron-down'
                            tintColor='white'
                            iconSize={20}
                        >
                            <View>
                                <Item rounded style={styles.searchBox}>
                                    <Input underlineColorAndroid="transparent" />
                                    <Icon active name='search' />
                                </Item>
                            </View>
                            <ScrollView
                                horizontal={false}
                                pagingEnabled={false}
                                automaticallyAdjustInsets={true}
                            >
                                <View style={{ height: 150 }}>

                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox checked={true} color='black'
                                            />
                                        <Text style={styles.text1} > CP1801 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox  checked={true} color='black'
                                            />
                                        <Text style={styles.text1} > CP1820 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox  checked={true} color='black'
                                            />
                                        <Text style={styles.text1} > CP1803 </Text>
                                    </View>
                                    <View style={styles.checkboxes} >
                                        {/* <Icon style={styles.arrow} name='arrows-v' /> */}
                                        <CheckBox  checked={true} color='black'
                                            />
                                        <Text style={styles.text1} > CP1850 </Text>
                                    </View>

                                </View>
                            </ScrollView>///gfjogkogiiiogfiujigoigjij
                        </Bar>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },
    navbar: {
        backgroundColor: '#76323f',
        width: 300,
        height: '100%',
        flexDirection: 'column'
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 10
    },
    text: {
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
    },
    line: {
        borderBottomWidth: 1,
        borderColor: 'white',
        marginLeft: 20,
        marginRight: 30
    },
    icon: {
        color: 'white',
        fontSize: 30,
        marginLeft: 30,
        marginTop: 10,
    },
    text1: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    icon1: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
        marginTop: 30,
    },
    icon2: {
        color: 'white',
        fontSize: 30,
        marginLeft: 60,
    },
    arrow: {
        textAlign: 'right',
        fontSize: 50,
        marginRight: 20,
    },
    collaps: {
        marginLeft: 10,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10
    },
    checkboxes: {
        flexDirection: 'row',
        marginLeft: 45,
        marginTop: 15,
        padding: 1
    },
    checkboxe1: {
        marginLeft: 18,
        marginTop: 30,
        padding: 1
    },
    checkboxe2: {

        marginLeft: 18,
        marginTop: 30,
        // padding: 1
    },
    collaps1: {
        marginLeft: 5,
        fontSize: 18,
        letterSpacing: 1,
        color: 'white',
        marginTop: 15,
        padding: 10
    },
    searchBox: {
        backgroundColor: 'white',
        padding: 5,
        width: 200,
        height: 50,
        marginTop: 10,
        marginLeft: 15,
    },
});