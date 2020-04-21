import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
import ResultShow from '../Components/ResultShow'
import useZomato from '../hooks/useZomato'





const SearchScreen = ()=>{
    
 
const [restaurant,changeRestaurant] = useState('');
const [searchResult,finding,errorMessage] = useZomato();


    return (
        <View>
            <SearchBar 
            restaurant={restaurant} 
            onRestChange={(props)=> changeRestaurant(props)}
            onTermSubmit={()=>searchResult(restaurant)}
            />
        <Text style={styles.searchBar}>Hello</Text>
    <Text>{restaurant}</Text>
    <Button title="abcd" onPress={async ()=>console.log(finding)} />
    <Text>{restaurant.length}</Text>
    {errorMessage ? <Text>{errorMessage}</Text>: null }
    <Text>{finding.length}</Text>
    <ResultShow title='sex'/>
    <ResultShow title='sexsd'/>
    <ResultShow title='sex3'/>


        
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    