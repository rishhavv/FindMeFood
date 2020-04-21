import React from 'react';
import {Text,View, StyleSheet} from 'react-native'

const ResultShow = ({title}) =>{
    return (
    <View>
    <Text style={styles.title}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"bold"
    }
    });


export default ResultShow;

