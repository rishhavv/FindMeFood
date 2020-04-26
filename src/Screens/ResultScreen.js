import React,{useState, useEffect} from 'react'
import { View , Text, Image, StyleSheet} from 'react-native';
import zomato from '../api/zomato';
import { FlatList } from 'react-native-gesture-handler';


 const ResultScreen = ({route}) => {
  const [info,setInfo] = useState([]);

    const { id } = route.params;
    const fetchDetails = async () =>{
       try { const details = await zomato.get('/restaurant',{
            params:{
                res_id:id
            }
        })
        setInfo(details.data);
    console.log(info)
    }
        catch(err){
            console.log(err);
        }

        

      
        
    } 

    useEffect(() =>{
        fetchDetails();},[]);


    console.log(info)
    return (
        <View style={style.container}>
            <FlatList data={info} keyExtractor={(info)=>info.id} 
            renderItem={(item)=>{
                return(
                    <>
                       <Image style={style.image} source={{uri:item.photos.photo.url}} />
               
                    </>
                ) 
            }} />
       <Image style={style.image} source={{uri:info.featured_image}} />
        <Text style={style.ttt}>{info.name} something</Text>
        <Text>{info.cuisines}</Text>
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

export default ResultScreen;
