import React, {Component} from "react";
import{
 Veiw,
 StyleSheet,
 ImageBackground,
 Image,
 TextInput,
 TouchableOpacity,
 Text,
 Alert,
 KeyboardAvoidingVeiw
}from "react";
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component{
    constructor (props) {
    super (props);
    this.state = {
        email:"",
        password:""
    };
    }

    handleLogin = (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>{
            this.props.navigation.navigate("BottomTab");
        })
        .catch(error =>{
            Alert.alert(error.message);
        });
    };

    render() {
        const { email, password} =this.state;
        return(
            <KeyboardAvoidingVeiw behaviour= "padding" style={styles.container}>
                <ImageBackground source = {bgImage} style={styles.bgImage}>
                    <Veiw style={style.upperContainer}>
                    <Image source={appIcon} style={styles.appIcon} />
                    <Image source={appIcon} style={styles.appName} />
                    </Veiw>
                    <Veiw style={styles.lowerContainer}>
                    <TextInput 
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={"Enter Email"}
                    placeholderTextColor={"#FFFFFF"}
                    autoFocus
                    />
                </Veiw>
                </ImageBackground>
            </KeyboardAvoidingVeiw>
        )
    }
}