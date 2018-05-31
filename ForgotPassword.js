import React from 'react';
import createReactClass from 'create-react-class';
import { AppRegistry, Text, TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import Logo from './logo.png'

import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';



//import noScroll from 'no-scroll'
// var noScroll = require('no-scroll');
// noScroll.on();

// //Open a react-rethinkdb session (a WebSocket connection to the server)
// ReactRethinkdb.DefaultSession.connect({
//   host: 'localhost', // hostname of the websocket server
//   port: 8015,        // port number of the websocket server
//   path: '/db',       // HTTP path to websocket route
//   secure: false,     // set true to use secure TLS websockets
//   db: 'capstone',    // default database, passed to rethinkdb.connect
// });

const ForgotPassword = createReactClass({


    getInitialState() {
        return {
            email: '',
            errorMessage: ''
        };
    },

    observe(props, state) {
        return {
            // users: new ReactRethinkdb.QueryRequest({
            //     query: r.table('users'),
            //     changes: true,
            //     initial: [],
            // }),
        };
    },

    async sendEmail() {
        //find user with this specific email
        // let query = r.table('users').filter({ email: this.state.email })

        let user = {}
        // await ReactRethinkdb.DefaultSession.runQuery(query).then(
        //     (res) => {
        //         res.toArray(function (err, results) {
        //             console.log(results);
        //             user = results
        //         });
        //     })

        console.log("user ", this.state.email)
        let emailCheck = /.+\@.+\..+/
        if (this.state.email != ""){
            // if (user[0].recovEmail === this.state.email && emailCheck.test(this.state.email)) {
            let key = Math.random().toString(36).substring(7)
        // user[0].key = key
        // let replaceQuery = r.table("users").get(user[0].id).replace(user[0])
        // await ReactRethinkdb.DefaultSession.runQuery(replaceQuery)

        //send the email
        // const response = await fetch("http://localhost:3001/api/resetpassword/"+user[0].recovEmail+"/"+key+"/"+user[0].id)
        // try {
        //     const json = await response.json()
        //     return json
        // } catch (ex) {
        //     return null
        // }
        // }
        // else {
        if (!emailCheck.test(this.state.email))
            this.setState({ errorMessage: "Enter a valid email address" })
        else if (user.email === this.state.email)
            this.setState({ errorMessage: "Not a valid user" })

        // 
    }
        else {
            this.setState({ errorMessage: "Enter an email address" })
        }

    },

    render() {
        return (
            // <div className='login-container' style={{
            //     backgroundImage: 'url(' + photo + ')',
            //     backgroundSize: 'cover',
            //     overflow: 'hidden',
            // }}>
            //     <center>
            //         <div className="uk-card uk-card-default uk-card-body uk-width-1-4@m  login-card" style={{ borderRadius: 20 }}>
            //             <img src={logo} style={{ width: 200, height: 150 }} />
            //             <hr />
            //             <h2 className="reset-title2"><strong>Enter your email to reset password</strong></h2>
            //             <div className="uk-margin"  >
            //                 <div className="uk-inline reset-input">
            //                     <input className="uk-input reset-input" type="email" value={this.state.email} placeholder="Enter Your Email" onChange={
            //                         (event) => this.setState({ email: event.target.value, error: '' })} />
            //                 </div>
            //                 <p>{this.state.errorMessage}</p>
            //             </div>
            //             <button className="uk-button reset-btn" onClick={() => this.sendEmail()}>Send email</button>

            //         </div>
            //     </center>
            // </div>
            // <LinearGradient
            // colors={['#e9e9e9', '#76323f']}
            // start={[0, 1]}
            // end={[1, 0]}>
            <View style={styles.container} >
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={styles.box} >
                        <Image source={require('./logo.png')} style={styles.pic} />


                        <View>

                            <Text style={styles.textStyle}>Enter Your email to reset password</Text>

                            <TextInput
                                style={{ height: 40, width: 350, backgroundColor: 'white', borderColor: 'black', borderWidth: 1, paddingLeft: 10, marginLeft: 25 }}
                                underlineColorAndroid='transparent' placeholder="Enter Your Email"
                                onChange={(event) => this.setState({ email: event.target.value, error: '' })}
                            />
                            <Text style={{ color: 'red', paddingLeft: 28 }}>{this.state.errorMessage}</Text>
                        </View>
                        <Text>{this.state.email}</Text>

                        {/* <Button rounded style={styles.buttons} >
                        <Text style={styles.buttonsText}>Login</Text>
                    </Button> */}

                        <TouchableOpacity style={styles.button} onPress={() => this.sendEmail()}>

                            <Text style={styles.buttonsText}>Email</Text>

                        </TouchableOpacity>


                    </View>
                </KeyboardAvoidingView>
            </View>
            // </LinearGradient>
        )
    },
});

export default ForgotPassword;

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
        width: 400,
        marginTop: 25,
        marginBottom: 10,

    },

});
