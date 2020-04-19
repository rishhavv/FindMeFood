import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
import zomato from '../api/zomato';



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
    <Button title="abcd" onPress={ async ()=>await console.log(zomato.get('/search?entity_type=landmark&q=momo&count=5&lat=28.704060&lon=77.102493&radius=1000&establishment_type=1&sort=cost&order=asc'))} />
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    