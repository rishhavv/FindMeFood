import React from 'react';
import {Text,View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ResultShow = ({title, results}) =>{
    return (
    <View>
    <Text style={styles.title}>{title}</Text>
    <Text>result:{results.length}</Text>
    <FlatList horizontal data={results} keyExtractor={(results)=> results.id} 
    renderItem={({item})=>{
    return <Text>{item.name}  </Text>
    }} />
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

