import React from 'react';
import {Text,View, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import DetailShow from '../Components/DetailShow'
import { useNavigation } from '@react-navigation/native';



const ResultShow = ({title, results}) =>{
    const navigation = useNavigation();
    return (
    <View>
    <Text style={styles.title}>{title}</Text>
   
    <FlatList 
    showsHorizontalScrollIndicator={false}
    scrollEnabled
    horizontal 
    data={results} keyExtractor={(results)=> results.id} 
    renderItem={({item})=>{
    return (<TouchableOpacity onPress={()=>navigation.navigate("ResultScreen",{id: item.id})}>
        <DetailShow name={item.name} image_url={item.thumb} costFTwo={item.average_cost_for_two} ratings={item.user_rating.aggregate_rating}/>
        </TouchableOpacity>
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

