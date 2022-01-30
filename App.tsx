import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import illuminati from '/assets/img/illuminati.png'

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>pivaa princesita</Text>
            <Image
              source={illuminati.png}
            style={{height:200, width:200}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'chocolate',},
        title: { fontSize: 30, color: '#fff' },
    } )


export default App