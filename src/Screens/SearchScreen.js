import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
import ResultShow from '../Components/ResultShow'
import useZomato from '../hooks/useZomato'



const SearchScreen = ()=>{
    
 
const [restaurant,changeRestaurant] = useState('');
const [searchResult,finding,errorMessage] = useZomato();

const priceFilter = (up,low) =>  {  // return( finding.filter(finding =>{
    //     return(low<=finding.price_range<up)
    //let abc = finding;
        
            
                for (const [key, value] of Object.entries(finding)) {
                   return console.log(key, value);
                  }
            
        
    
       
        
    }
 
 





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
    <ResultShow results={priceFilter(1,4)} title='abcd'/>
    {/* <ResultShow results={priceFilter(4,8)} title='sexsd'/>
    <ResultShow results={priceFilter(8,11)} title='sex3'/> */}


        
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    