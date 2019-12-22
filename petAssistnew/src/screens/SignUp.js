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
    Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { firebaseAuth } from '../functions/dbConfig';

export default class SignUp extends Component {
    
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {

        console.log('handleSignUp')
        firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.goToScreen('startPage'))
            .catch(error => this.setState({ errorMessage: error.message }));
    }


    
    
    // constructor(props) {
    //     super(props);
    //     state = {
    //         email: '',
    //         password: '',
    //     }
    // }

    onClickListener = (viewId) => {
        Alert.alert("Alert", " " + viewId);
    }

    render() {
        return (
            <View style={styles.container}>

                <ImageBackground style={styles.LogoStyle} source={require('../Images/PetAssistLogo.png')}>

                </ImageBackground>



                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}

                        placeholder="isim"
                        

                    onChangeText={(isim) => this.setState({ isim })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}

                        placeholder="soyisim"
                       

                    onChangeText={(soyisim) => this.setState({ soyisim })} />
                </View>
            


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

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.handleSignUp()}>
                    <Text style={styles.loginText}>Kayıt Ol</Text>
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
        borderBottomColor: '#FFFFFF',
        flex: 1,
        fontWeight:'bold',
        
        
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