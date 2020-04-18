import React from 'react';
import { StyleSheet ,View} from 'react-native';
import {EvilIcons} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({restaurant, onRestChange, onTermSubmit})=>{
    return( 
        <View style={styles.searchBar}>
            <EvilIcons name="search" style={styles.icon} size={45}/>
           <TextInput 
           autoCapitalize='none'
           autoCorrect={false}
           placeholder="Search" style={styles.Input}
           value={restaurant}
           onChangeText={(query)=>onRestChange(query)}
           onEndEditing={()=>onTermSubmit()}
           
           />
           
          
    </View>
    )
}

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor:'rgb(161, 171, 170)',
        height:50,
        borderRadius:7,
        marginHorizontal:15,
        marginVertical:10,
        fontSize:30,
        flexDirection:'row',
        
    },
    Input:{
        borderColor:'black',
        borderWidth:1,
        flex:1,
        fontSize:20
        
    },
    Icon:{
        
        
    }
});



export default SearchBar;