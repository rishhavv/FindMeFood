import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SearchBar from '../Components/SearchBar'
import { useState } from 'react';
import ResultShow from '../Components/ResultShow'
import useZomato from '../hooks/useZomato'



const SearchScreen = ()=>{
    
 
const [restaurant,changeRestaurant] = useState('');
const [searchResult,finding,errorMessage] = useZomato();

const priceFilter = (low,up) =>  {  
        let filterResults =[];
            
             for (const [key, value] of Object.entries(finding)) {
                
                  if(value.restaurant.price_range>=low)
                  {
                      if(value.restaurant.price_range<=up)
                    {filterResults.push(value.restaurant);}
                  }
                  }
                  console.log(filterResults);
                  return filterResults;
            
        
    
       
        
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
    <ResultShow results={priceFilter(1,2)} title='abcd'/>
    <ResultShow results={priceFilter(3,3)} title='sexsd'/>
    <ResultShow results={priceFilter(4,5)} title='sex3'/>


        
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    