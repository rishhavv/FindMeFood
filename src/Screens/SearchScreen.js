import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
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
        <>
            <SearchBar 
            restaurant={restaurant} 
            onRestChange={(props)=> changeRestaurant(props)}
            onTermSubmit={()=>searchResult(restaurant)}
            />
    <ScrollView style={{marginLeft:10}}>
    <ResultShow results={priceFilter(1,1)} title='Super saver'/>
    <ResultShow results={priceFilter(2,2)} title='Mid Month'/>
    <ResultShow results={priceFilter(3,5)} title='Big Spending'/>
    </ScrollView>

        
        </>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    





    {/* <Button title="abcd" onPress={async ()=>console.log(finding)} /> */}
    {/* <Text>{restaurant.length}</Text>
    {errorMessage ? <Text>{errorMessage}</Text>: null }
    <Text>{finding.length}</Text> */}