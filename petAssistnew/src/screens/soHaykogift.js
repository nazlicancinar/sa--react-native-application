import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image, TextInput, ImageBackground, TouchableHighlight } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { firebaseAuth } from '../functions/dbConfig';
import { NavFunc } from '../functions/navigationfunctions';
import DropdownMenu from 'react-native-dropdown-menu';


export default class App extends Component {
    _showAlert = () => {
        Alert.alert(
            'İşleminiz Başarıyla Gerçekleşti',
            'Bağışınız için teşekkürler.',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },


            ],
            { cancelable: false }
        )
    }


    render() {

        return (
            <View style={styles.container}>

                <ImageBackground style={styles.LogoStyle} source={require('../Images/thkd.png')}>
                </ImageBackground>





                <View style={styles.inputContainer}>
                    <Image
                        style={styles.Imagetwo}
                        source={require('../Images/mastercard.png')}


                    />


                    <TextInput style={styles.inputs}

                        placeholder="Kart Numaranızı Girin"
                        keyboardType={'numeric'}

                    />

                </View>

                <View style={styles.inputContainer}>
                    <Image
                        style={styles.Imagetwo}
                        source={require('../Images/cash.png')}


                    />

                    <TextInput style={styles.inputs}
                        placeholder="Bağış Miktarı"
                        keyboardType={'numeric'}

                    />
                </View>


                <TouchableOpacity
                    style={styles.alertButton}
                    onPress={this._showAlert}>
                    <Text style={styles.alertText}>Ödemeyi Gerçekleştirin!</Text>
                </TouchableOpacity>


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

        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start'
    },
    inputs: {
        borderColor: '#CF5B00',
        borderBottomColor: '#CF5B00',
        height: 45,
        marginLeft: 16,

        flex: 1,
        fontWeight: 'bold',
        marginTop: 15,
        fontSize: 20,


    },
    Imagetwo: {
        flexDirection: 'row',
        width: 70,
        height: 70,

        marginStart: 40
    },
    LogoStyle: {
        width: 190,
        height: 190,

        marginBottom: 50,
        justifyContent: 'center'
    },
    slideTwo: {
        flex: 2,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start'

    },


    alertButton: {
        borderWidth: 4,
        borderBottomColor: 'pink',
        borderColor: 'pink',
        backgroundColor: '#FFFFFF',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: 250,
        borderRadius: 30,
    },


    alertText: {
        fontSize: 20,
        color: 'black',
    }
});