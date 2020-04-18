import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
const SearchScreen = ()=>{
    const [restaurant,changeRestaurant] = useState('')
    return (
        <View>
            <SearchBar 
            restaurant={restaurant} 
            onRestChange={(props)=> changeRestaurant(props)}
            onTermSubmit={()=>console.log("chal gya")}
            />
        <Text style={styles.searchBar}>Hello</Text>
    <Text>{restaurant}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    