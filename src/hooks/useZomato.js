import {useState , useEffect} from 'react';
import zomato from '../api/zomato';

export default () =>{

const [finding, setFindings] = useState([]);
const [errorMessage, setError] = useState('');
    

const searchResult = async (something) =>{
   try {const wapis = await zomato.get('/search',{
        params:{
            entity_id:2,
            entity_type:'landmark',
            q:something,
            count:10,
            lat:28.704060,
            lon:77.102493,
            radius:10000,
            
        }
    });

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