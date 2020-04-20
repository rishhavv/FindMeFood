import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
import zomato from '../api/zomato';





const SearchScreen = ()=>{
    
 
const [restaurant,changeRestaurant] = useState('');
const [finding, setFindings] = useState([]);
    

const searchResult = async () =>{
    const wapis = await zomato.get('/search',{
        params:{
            entity_id:1,
            entity_type:'landmark',
            q:restaurant,
            count:10,
            lat:28.704060,
            lon:77.102493,
            radius:10000,
            
        }
    });

    setFindings(wapis.data.restaurants)
};  


    return (
        <View>
            <SearchBar 
            restaurant={restaurant} 
            onRestChange={(props)=> changeRestaurant(props)}
            onTermSubmit={searchResult}
            />
        <Text style={styles.searchBar}>Hello</Text>
    <Text>{restaurant}</Text>
    <Button title="abcd" onPress={async ()=>console.log(finding)} />
    <Text>{restaurant.length}</Text>
    <Text>{finding.length}</Text>

        
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    