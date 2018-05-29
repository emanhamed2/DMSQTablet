import { TextInput, View, Alert, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Linking, ScrollView } from 'react-native';
import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Instructor_HomePage from './Instructor_Homepage'
import NavInstructor from './NavInstructor'
import Chat from './Chat'
import Entypo from 'react-native-vector-icons/Entypo'


export default class Instructor extends React.Component {

    state = {
        rightButton: 'chat-button',
        leftButton: 'nav-button',
        screen: window.innerWidth,
        activeIndex: 0,
        open: false,
        changeClass: window.innerWidth >= 500 ? "container-instructor-full" : "container-instructor-both",
        expandRight: false,
        iconRight: false ? <Entypo name="chevron-right" size={30} style={{ color: '#76323f', }} /> : <Entypo name="chevron-left" size={30} style={{ color: '#76323f', }} />,
        expandLeft: false,
        iconLeft: false ? <Entypo name="chevron-left" size={30} style={{ color: '#76323f', }} /> : <Entypo name="chevron-right" size={30} style={{ color: '#76323f', }} />,
        cal: 0
    }
    //    <Ionicons name="md-send" size={30} style={{ color: '#76323f', }} />


    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    handleChange = (e, { value }) => this.setState({ value })
    handleChange2 = (e, { value2 }) => this.setState({ value2 })
    handleChange3 = (e, { value3 }) => this.setState({ value3 })

    toggleVisibility = () => this.setState({ visible: !this.state.visible })


    handleSize = () => {
        // console.log('resize',window.innerWidth)
        window.innerWidth <= 800 ?
            this.setState(
                {
                    screen: window.innerWidth,
                    changeClass: "container-instructor-full",
                    expandRight: false,
                    expandLeft: false,
                    rightButton: 'chat-button',
                    leftButton: 'nav-button',
                    cal: window.innerWidth + 305
                }
            )
            : null
    }
    handleExpandRight = () => {
        let right = !this.state.expandRight
        console.log('right:', right, this.state.expandLeft, this.state.expandRight)
        this.setState(
            {
                changeClass:
                    this.state.expandLeft && right ?
                        "container-instructor-both" :
                        !this.state.expandLeft && !right ?
                            "container-instructor-full" :
                            !this.state.expandLeft && right ?
                                "container-instructor-right" :
                                this.state.expandLeft && !right ?
                                    "container-instructor-left" :
                                    "container-instructor-both2",
                rightButton:
                    this.state.expandLeft && right ?
                        "chat-button-open" :
                        !this.state.expandLeft && !right ?
                            "chat-button" :
                            !this.state.expandLeft && right ?
                                "chat-button-open" :
                                this.state.expandLeft && !right ?
                                    "chat-button" :
                                    "chat-button",

                leftButton:
                    this.state.expandLeft && right ?
                        "nav-button-open" :
                        !this.state.expandLeft && !right ?
                            "nav-button" :
                            this.state.expandLeft && !right ?
                                "nav-button-open" :
                                !this.state.expandLeft && right ?
                                    "nav-button" :
                                    "nav-button",
                expandRight: right,
                iconRight: !this.state.expandRight ? <Entypo name="chevron-right" size={30} style={{ color: '#76323f', }} /> : <Entypo name="chevron-left" size={30} style={{ color: '#76323f', }} />
            }
        )
    }
    handleExpandLeft = () => {
        let left = !this.state.expandLeft

        console.log('left:', left, this.state.expandLeft, this.state.expandRight)
        console.log('left:', left)
        this.setState(
            {
                changeClass:
                    left && this.state.expandRight ?
                        "container-instructor-both" :
                        !left && !this.state.expandRight ?
                            "container-instructor-full" :
                            left && !this.state.expandRight ?
                                "container-instructor-left" :
                                !left && this.state.expandRight ?
                                    "container-instructor-right" :
                                    "container-instructor-both2",
                rightButton:
                    left && this.state.expandRight ?
                        "chat-button-open" :
                        !left && !this.state.expandRight ?
                            "chat-button" :
                            left && !this.state.expandRight ?
                                "chat-button" :
                                !left && this.state.expandRight ?
                                    "chat-button-open" :
                                    "chat-button",
                leftButton:
                    left && this.state.expandRight ?
                        "nav-button-open" :
                        !left && !this.state.expandRight ?
                            "nav-button" :
                            left && !this.state.expandRight ?
                                "nav-button-open" :
                                !left && this.state.expandRight ?
                                    "nav-button" :
                                    "nav-button",
                expandLeft: left,
                iconLeft: !this.state.expandLeft ? <Entypo name="chevron-left" size={30} style={{ color: '#76323f', }} /> : <Entypo name="chevron-right" size={30} style={{ color: '#76323f', }} />
            }
        )
    }
    // handleClick2 = () => this.setState({ open: !this.state.open })

    handleClose = () => this.setState({ open: false })
    handlesss = () => {
        return {
            backgroundColor: 'pink',
            width: "100%",
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    render() {

        return (
            <View style={styles.container}>
                {
                    // this.state.screen >= 500
                    this.state.expandLeft//&&window.innerWidth>=305// collapsses when width is small
                        ?
                        <NavInstructor />
                        :
                        <View></View>
                }
                <View class={this.state.changeClass}>
                    <View class={this.state.leftButton} uk-icon={this.state.iconLeft} onClick={() => this.handleExpandLeft()}>
                    </View>
                    <Instructor_HomePage />
                    <View class={this.state.rightButton}
                        uk-icon={this.state.iconRight}
                        onClick={() => this.handleExpandRight()}>
                    </View>
                </View>
                {
                    this.state.expandRight
                        ?
                        <Chat />
                        :
                        <View></View>
                }
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
    container1: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },



});
