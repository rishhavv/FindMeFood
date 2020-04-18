import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import SearchBar from '../Components/SearchBar'
const SearchScreen = ()=>{
    return (
        <View>
            <SearchBar />
        <Text style={styles.searchBar}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
});



export default SearchScreen;    