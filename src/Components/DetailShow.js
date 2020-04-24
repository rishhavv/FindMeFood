import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const DetailShow = ({name , image_url}) =>{
    return(
        <View>
        <Image style={style.image} source={{uri: image_url}} />
       <Text style={style.ttt}>{name} </Text>
       </View>
    )
}

const style = StyleSheet.create({
    image:{
        width:180,
        height:120,
        borderRadius:4
    },
    ttt:{
        fontWeight:"bold"
    }
})

export default DetailShow;