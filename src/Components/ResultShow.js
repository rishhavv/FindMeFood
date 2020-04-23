import React from 'react';
import {Text,View, StyleSheet} from 'react-native'

const ResultShow = ({title, results}) =>{
    return (
    <View>
    <Text style={styles.title}>{title}</Text>
    {/* <Text>result:{results.length}</Text> */}
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

