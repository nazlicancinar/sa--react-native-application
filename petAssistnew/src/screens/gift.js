import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Button, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import NavFunc from '../functions/navigationfunctions'


export default class gift extends Component {
    goToScreen = (screenName) => {


        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })



    }


    render() {
        return (
            <View style={styles.container}>


                <View style={styles.slideTwo}>
                    <TouchableOpacity
                        onPress={() => this.goToScreen('exampleGift')}
                    >
                        <Image
                            style={styles.Image}
                            source={require('../Images/haciko.png')}



                        />
                        <Text style={styles.textType}>Haçiko 
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.slideTwo}>
                        <TouchableOpacity
                            onPress={() => this.goToScreen('exampleGift')}
                        >
                            <Image
                                style={styles.Image}
                                source={require('../Images/sohayko.jpg')}



                            />

                            <Text style={styles.textType}>SoHayKo
                        </Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.slideTwo}>
                    <TouchableOpacity
                        onPress={() => this.goToScreen('exampleGift')}
                    >
                        <Image
                            style={styles.Image}
                            source={require('../Images/sokakhay.png')}



                        />
                        <Text style={styles.textType}>Sokak Hay.
                        </Text>


                    </TouchableOpacity>

                    <View style={styles.slideTwo}>

                        <TouchableOpacity
                            onPress={() => this.goToScreen('exampleGift')}
                        >
                            <Image
                                style={styles.Image}
                                source={require('../Images/thkd.png')}



                            />
                            <Text style={styles.textType}>THKD 
                        </Text>


                        </TouchableOpacity>
                    </View>

                </View>

               
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFCFC',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 30,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    textType: {


        color: '#B4231E',
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center'

    },

    Image: {

        width: 110,
        height: 130,
        borderWidth: 2,
        borderRadius: 40,
        borderColor:'#B74542'


    },
    slideTwo: {
        flex: 2,
        marginLeft: 50,


        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start'


    },
});