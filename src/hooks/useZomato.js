import {useState , useEffect} from 'react';
import zomato from '../api/zomato';

export default () =>{

const [finding, setFindings] = useState([]);
const [errorMessage, setError] = useState('');
    

const searchResult = async (something) =>{
    let i=0;
    const restaurantData =[];
  for(i=0;i<10;i=i+20){
    try {const wapis = await zomato.get('/search',{
        params:{
            //entity_id:1,
            entity_type:'zone',
            q:something,
            count:50,
            lat:28.4952,
            lon:77.08913,
            radius:10000,
            start:i,
            sort:'rating',
            order:'desc'
            
        }
    });
  
    // for(let i ; i< ln ; i++ ){
    //     console.log(wapis.data.restaurants[i][restaurant][price_range]) 
    // }
    restaurantData.push(...wapis.data.restaurants)
    
    
} catch(err){
    setError("L lag gye");
    console.log(wapis);
}    
   
    console.log(restaurantData)



    }
    setFindings(restaurantData)
    
}
useEffect(() =>{
    searchResult('');},[]);


    return [searchResult,finding,errorMessage]

}