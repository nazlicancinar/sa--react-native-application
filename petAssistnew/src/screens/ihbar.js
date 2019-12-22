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
					<Text style={styles.title}>“HAYVANA SİDDET SUÇU” artık 112 acil numarasına şikayet edilebiliyor.

						
                    
                     </Text>
                    
					<Text style={styles.title}>hayvanhaklari@ormansu.gov.tr adresinden Tarım ve Orman Bakanlığına Direk Şikayette Bulunabilirsiniz</Text>
					<Text style={styles.title}>Her türlü acil durumda olduğu gibi 155 hattı hayvanlara karşı işlenen suçlardada ilk arayacağımız numaradır.</Text>
					<Text style={styles.title}>Hayvan Hakları Federasyonu (HAYTAP) öncelikli arayacağınız kurum olmasada avukatları ve gönüllüleri ile oluşabilecek dava ve ya hayvanların sağlık sorunları için hızlıca yardımcı olabilecek bir kurumdur. </Text>
				
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
		marginVertical: 40,
		textAlign: 'center',
		paddingVertical: 200,
		borderColor: '#FF5722',
		borderRadius:55,
        borderWidth: 2,
        justifyContent: 'space-between',
		fontSize: 19,
		fontWeight: 'bold',
		color: '#FFFFFF',
		width
    },
    Image: {
        
        width: 100,
        height:100,
        
     
        


	},
	
});