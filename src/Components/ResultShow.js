import React from 'react';
import {Text,View, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import DetailShow from '../Components/DetailShow'


const ResultShow = ({title, results}) =>{
    return (
    <View>
    <Text style={styles.title}>{title}</Text>
    <Text>result:{results.length}</Text>
    <FlatList 
    showsHorizontalScrollIndicator={false}
    scrollEnabled
    horizontal 
    data={results} keyExtractor={(results)=> results.id} 
    renderItem={({item})=>{
    return (<View>
        <DetailShow name={item.name} image_url={item.thumb} costFTwo={item.average_cost_for_two} ratings={item.user_rating.aggregate_rating}/>
        </View>
        )
    }} />
    </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"bold",
        fontFamily:'Roboto'
    }
    });


export default ResultShow;

