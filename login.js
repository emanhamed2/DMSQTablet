import { Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import Logo from './logo.png';
import { LinearGradient } from 'expo'

import createReactClass from 'create-react-class';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

// export default class Login extends React.Component {

//     render() {
//         return (
const Login = createReactClass({


    getInitialState() {
        return {
            student: { name: "Eman Hamed", password: "Password1!", loginId: 'lemk' },
            instructor: { name: "Instructor", password: "Password1!", loginId: 'lemy' },
            credentials: '',
            messageToUser: '',
            showcredentials: false
        };
    },

    observe(props, state) {
        return {
        };
    },

    async handleLogin() {
        let field = this.state.credentials;
        const specialCharacter = "."
        let splitIndex = -1
        for (let i = 0; i < field.length; i++) {
            let c = field.charAt(i)
            if (c === specialCharacter) {
                splitIndex = i
                break
            }
        }
        let username = field.substring(0, splitIndex).trim()
        let password = field.substring(splitIndex + 1).trim()
        console.log(username)
        
        if (username === "" || password === "") {
            this.setState({ messageToUser: "Invalid Input" })
        }
        else {
            let result = null;
            // let query = r.table('users').get(username)
            // ReactRethinkdb.DefaultSession.runQuery(query).then(
            // (res) => {
            // console.log(res)
        }
        let user = null
        if (username === this.state.student.loginId) {
            user = this.state.student
        } else if (username === this.state.instructor.loginId) {
            user = this.state.instructor
        } else {
            this.setState({ messageToUser: "Activate your account to login" })
        }
        
        if (user.password != "") {
            console.log("USER", user)
            if (user) {
                bcrypt.compare(password, user.password, (err, check) => {
                    if (check) {
                        result = { user, token: sign(user, secret) }
                        console.log('Success')
                        sessionStorage.setItem("token", result.token)
                        sessionStorage.setItem("user_id", result.user.id)
                        sessionStorage.setItem("user_name", result.user.name)
                        sessionStorage.setItem("role", result.user.role)
                        console.log(sessionStorage.getItem("token"))
                        console.log(sessionStorage.getItem("user_id"))
                        console.log(sessionStorage.getItem("role"))
                        //handleUserStatus(result.user.id)
                        this.setState({ messageToUser: "" })
                        if (sessionStorage.getItem("role") === "Instructor") {
                            this.props.history.push("instructors")
                        }
                    }
                    else {
                        this.setState({ messageToUser: "Invalid Input" })
                    }
                })
            }
            else {
                this.setState({ messageToUser: "Invalid Input" })
            }
        }
        else {
            this.setState({ messageToUser: "Activate your account to login" })
        }

    
},

    render() {
        return(
            <LinearGradient
                colors = { ['#e9e9e9', '#76323f']}
                start = { [0, 1]}
                end = { [1, 0]} >
                <View style={styles.container} >
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <View style={styles.box} >
                            <Image source={require('./logo.png')} style={styles.pic} />
                            <View>
                                <Text style={styles.textStyle}>Username.Password</Text>
                                <TextInput placeholder="Username.Password"
                                    value={this.state.credentials}
                                    style={{ height: 40, width: 300, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginLeft: 18 }}
                                    underlineColorAndroid='transparent'
                                    onChange={e => this.setState({ credentials: e.target.value, messageToUser: '' })}
                                />
                                {/* <Text style={{ color: 'red', paddingLeft: 22 }}>Invalid Username.Password</Text> */}
                            </View>
                            <Text style={{ color: 'red', fontSize: 20, }}> {this.state.messageToUser}</Text>
                            <TouchableOpacity style={styles.button} onPress={() => this.handleLogin()}>
                                <Text style={styles.buttonsText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text
                                    style={styles.textStyle1}
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                >
                                    Forgot your password
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </LinearGradient >

        )
    },
});

export default Login;

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
        marginLeft: 20,


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
        width: 300,
        marginTop: 25,
        marginLeft: 15,
        marginBottom: 10,

    },
    textStyle1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        paddingTop: '5%',
        color: '#787E84',
        paddingLeft: 20,

    },
    // buttons: {
    //     marginTop: 20,
    //     backgroundColor: "#fffaf0",
    //     width: 80,
    //     color: 'white',
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     marginLeft: 60,
    //     fontWeight: 'bold',
    // },


});
