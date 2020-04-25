import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const DetailShow = ({name , image_url, costFTwo , ratings}) =>{
    const br = `\n`;
    return(
        <View style={style.container}>
        <Image style={style.image} source={{uri: image_url}} />
       <Text style={style.ttt}>{name} </Text>
       <Text> {ratings} star</Text>
      <Text> Avg Cost for two:{costFTwo}</Text>
       </View>
    )
}

const style = StyleSheet.create({
    container:{
        marginLeft:10,
    },
    image:{
        width:180,
        height:120,
        borderRadius:50
    },
    ttt:{
        fontWeight:"bold",
       
    }
})

export default DetailShow;