import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Button, Image,ScroolView } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class App extends Component {


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
				<View style={styles.slideOne}>
                    <TouchableOpacity
                       onPress={() => this.goToScreen('ihbar')}
                    >
                       
                        <Text style={styles.textType}> Nasıl İhbar Ederim?
                        </Text>
                        <Image
                            style={styles.Image}
                            source={require('../Images/ihbat.png')}



                        />
                    </TouchableOpacity>
                 </View>


                 <View style={styles.slideTwo}>
                    <TouchableOpacity
                         onPress={() => this.goToScreen('yardim')}
                    >
                       
                        <Text style={styles.textType}> Nasıl Yardım Ederim?
                        </Text>   
                        <Image
                            style={styles.Image}
                            source={require('../Images/yardim.png')}



                        />
                    </TouchableOpacity>
                 </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F59B20',
        flex: 1,
        flexDirection: 'row',
        
  },
	slideOne: {
		backgroundColor: '#F59B20',
		flex: 1 // 3:6
	},
	slideTwo: {
		backgroundColor: '#FF5722',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    },
    textType: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        paddingTop: 200,
        textAlign: 'center',
        

    },
    
    Image: {

        width: 100,
        height: 100,
        borderWidth: 10,
        borderRadius: 10,
        alignSelf:'center'
        


    },

});