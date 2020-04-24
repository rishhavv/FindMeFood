import {useState , useEffect} from 'react';
import zomato from '../api/zomato';

export default () =>{

const [finding, setFindings] = useState([]);
const [errorMessage, setError] = useState('');
    

const searchResult = async (something) =>{
   try {const wapis = await zomato.get('/search',{
        params:{
            //entity_id:1,
            entity_type:'zone',
            q:'',
            count:50,
            lat:28.4952,
            lon:77.08913,
            radius:1000,
            sort:'real_distance',
            order:'asc'
            
        }
    });
    let ln = wapis.data.restaurants.length;
    // for(let i ; i< ln ; i++ ){
    //     console.log(wapis.data.restaurants[i][restaurant][price_range]) 
    // }
       

    setFindings(wapis.data.restaurants)
} catch(err){
    setError("L lag gye");
    console.log(wapis);
}


}
useEffect(() =>{
    searchResult('samomsa');},[]);


    return [searchResult,finding,errorMessage]

}