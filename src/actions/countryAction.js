import { FETCH_COUNTRIES, SEARCH_COUNTRY,SEARCH_REGION} from "./types";
import axios from "axios";


export const fetchCountries=()=>async(dispatch)=>{
        const res=await axios("https://restcountries.com/v3.1/all")
        const Countries=res.data.sort().slice(0,20);
        dispatch({
            type:FETCH_COUNTRIES,
            payload:Countries,
        })
}


export const searchCountry=(query)=>async(dispatch)=>{ 
    try{
        console.log("query is ="+query)
        if(query){
            const res=await axios(`https://restcountries.com/v3.1/name/${query}`) 
            const countries=await res.data;
            await dispatch({ 
                type:SEARCH_COUNTRY,
                payload:countries,
            })
        }else{
            dispatch(fetchCountries());
        }
       
    }catch(err){
        console.log("an error occured while searching "+err);
    }
    
}

export const searchRegion=(query)=>async(dispatch)=>{
    try{
        const res=await axios(`https://restcountries.com/v3.1/region/${query}`)
        const countries=await res.data;
        await dispatch({
            type:SEARCH_REGION,
            payload:countries,
        })
    }catch(err){
        console.log("an error occured "+ err);
    }
    
}