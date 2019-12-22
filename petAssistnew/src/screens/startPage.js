import React, { Component } from 'react'
import { ActivityIndicator, View, Text, StyleSheet,ImageBackground } from 'react-native';
import { Navigation } from "react-native-navigation";
import NavFunc from '../functions/navigationfunctions'
import { firebaseAuth } from '../functions/dbConfig';
import homePage from './homePage'
import Login from './Login'
Navigation.registerComponent(`homePage`, () => homePage);
Navigation.registerComponent(`Login`, () => Login);

export default class startPage extends Component {

    
    componentDidMount() {
       
          
        firebaseAuth.onAuthStateChanged(user => {
            NavFunc.setRoot(user ? 'homePage' : 'Login')
        })
    }

    render() {
        return (
            <View style={styles.container}>
               {/* <ImageBackground style={styles.LogoStyle}  source={require('../Images/PetAssistLogo.png')}>

               </ImageBackground> */}
                 
                <Text>Yükleniyor..</Text>      
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoStyle: {
        width: 180,
        height: 180,
    },
})