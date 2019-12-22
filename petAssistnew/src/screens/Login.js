import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    ImageBackground,
    Alert,
    SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { firebaseAuth } from '../functions/dbConfig';
import {NavFunc} from '../functions/navigationfunctions';


export default class LoginView extends Component {

  goToScreen = (screenName,topBarName) => {
      Navigation.push(this.props.componentId, {
          component: {
              name: screenName,
            options:{
                topBar:{
                    title:{
                        text:topBarName
                    }
                }
            }
          }
      })
  }

  setRoot = (screenName) => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [{
                    component: {
                        name: screenName,
                        options: {
                            topBar: {
                                visible: false,
                                height: 0
                            },
                            statusBar: {
                                style: 'light'
                            }
                        }
                    }
                }]
            }
        }
    });
}

  


  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setRoot('homePage'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

    render() {
        return (
            
            <View style={styles.container}>

                <ImageBackground style={styles.LogoStyle} source={require('../Images/PetAssistLogo.png')}>

                </ImageBackground>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <View style={styles.inputContainer}>
                
                    <TextInput style={styles.inputs}

                        placeholder="E-mail"
                        keyboardType="email-address"

                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.inputs}
                        placeholder="Şifre"
                        secureTextEntry={true}

                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.handleLogin()}>
                    <Text style={styles.loginText}>Giriş Yap</Text>
                </TouchableHighlight>

                

                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.goToScreen('SignUp','Kayıt Ol')}>
                    <Text> Kayıt Ol!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputContainer: {
        borderBottomColor: '#CF5B00',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CF5B00',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#CF5B00',
        flex: 1,
        fontWeight:'bold'
    },
    LogoStyle: {
        width: 180,
        height: 180,

        marginBottom: 25,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#CF5B00",
    },


    loginText: {

        color: 'white',
    }
});