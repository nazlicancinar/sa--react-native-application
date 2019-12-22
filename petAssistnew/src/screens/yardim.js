import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					pagingEnabled={true}
					horizontal={true}
				>
					<Text style={styles.title}>
                        İlk Yardımın amacı hayvanı tedavi etmek değil, ilk andaki hayati tehlikeyi önlemeye calışmaktır.  
                        Bu yardımdan sonra illa veteriner hekim müdahalesi gerekir.
                        
                    
						
                    
                     </Text>
                    
					<Text style={styles.title}>
                        Gerektiğinde kendinizi hayvandan koruyun!
                       


                    </Text>
					<Text style={styles.title}> Oldukça yumuşak bir ses tonu ile konuşun.
                        Direk göz temasından sakının TEHTİD olarak algıayabilir.</Text>
					<Text style={styles.title}> Daha detaylı bilgi almak için 
                    İBB'nin sitesinden evcil hayvanlarda ilk yardım dökümanlarını inceleyebilirsiniz </Text>
				
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FF5722',
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		backgroundColor: '#FFAE31',
		marginVertical: 20,
		textAlign: 'center',
		paddingVertical: 200,
		borderColor: '#FF5722',
		borderRadius:55,
        borderWidth: 2,
        justifyContent: 'space-around',
		fontSize: 23,
		
		color: 'black',
		width
    },
    Image: {
        
        width: 100,
        height:100,
        
     
        


	},
	
});