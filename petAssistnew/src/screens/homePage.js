import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Button, Image,ScroolView,TouchableHighlight,Alert} from 'react-native'
import { Navigation } from 'react-native-navigation'
import NavFunc from '../functions/navigationfunctions'
import { firebaseAuth } from '../functions/dbConfig';




export default class homePage extends Component {
    
    state = { currentUser: null, errorMessage: null }

    componentDidMount() {
        const { currentUser } = firebaseAuth;
        this.setState({ currentUser })
    }
    
    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
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


    _logout = () =>{

        Alert.alert('Çıkış','Oturumdan çıkış yapılacak. Devam Edilsin mi?',[
            
            {
                text:'Hayır',
                style: 'cancel'
            },
            {
                text:'Evet',
                onPress: ()=>{
                    firebaseAuth.signOut()
                    .then(() => NavFunc.setRoot('Login'))
                    .catch(error => this.setState({ errorMessage: error.message }));
                }
            }
        ])
    }


    render() {
        
        const { currentUser } = this.state;
        return (
            

            <View style={styles.container}>
                

                <View style={styles.slideTwo}>
                    <TouchableOpacity
                        onPress={() => this.goToScreen('myPets')}
                    >
                        <Image
                            style={styles.Image}
                            source={require('../Images/petIcon.png')}



                        />
                        <Text style={styles.textType}> Petlerim
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.slideTwo}>
                        <TouchableOpacity
                            onPress={() => this.goToScreen('clinic')}
                        >
                            <Image
                                style={styles.Image}
                                source={require('../Images/doctorIcon.png')}



                            />

                            <Text style={styles.textType}> Klinik Bul
                        </Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.slideTwo}>
                    <TouchableOpacity
                        onPress={() => this.goToScreen('complaint')}
                    >
                        <Image
                            style={styles.Image}
                            source={require('../Images/police.png')}



                        />
                        <Text style={styles.textType}> İhbar Et
                        </Text>


                    </TouchableOpacity>

                    <View style={styles.slideTwo}>

                        <TouchableOpacity
                            onPress={() => this.goToScreen('gift')}
                        >
                            <Image
                                style={styles.Image}
                                source={require('../Images/creditard.jpg')}



                            />
                            <Text style={styles.textType}> Bağış Yap
                        </Text>


                        </TouchableOpacity>
                    </View>

                </View>

                
                <TouchableHighlight  onPress={()  => this._logout()}>
                    <Text style={styles.loginText}>Çıkış Yap</Text>
                </TouchableHighlight>

      

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 70,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    textType: {


        color: '#CF5B00',
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center',
        justifyContent: 'space-around'
        

    },
    loginText: {
        fontSize: 20,
        color: '#CF5B00',
        marginBottom:40,
        fontWeight: 'bold'
    },
    Image: {
        
        width: 110,
        height: 140,
        borderWidth: 5,
        borderRadius: 35,
        borderColor:'#CF5B00'


    },
    slideTwo: {
        flex: 1,
        marginLeft: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-start'


    },
    
   
});
