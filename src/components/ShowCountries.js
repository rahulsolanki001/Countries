import {useEffect} from "react";
import styles from "./ShowCountries.module.css";
import Link from "next/link";
import { connect } from "react-redux";
import { fetchCountries } from "@/actions/countryAction";
const ShowCountries=({fetchCountries,countries,lightTheme})=>{
    useEffect(()=>{

        const getCountries=async()=>{
          
                fetchCountries();
        }
        getCountries();
    },[])

    // At once only 20 countries must be rendered
    countries=countries.slice(0,20);

    return(
        <div className={`${styles.countries} ${lightTheme ? null :styles.dark}`}>
            {countries.length==0  ? <h1>Loading...</h1> : 
                
                countries.map((country,id)=>(
                    <div key={id} className={`${lightTheme ? styles.light : styles.darkContainer}`}>
                        <Link href="/countries/[name]" as={`/countries/${country.cca3}`}><img src= {`${country.flags.svg}`} alt={`flag of ${country.name.common}`}/></Link>
                        <h2>{country.name.common}</h2>
                        <p><strong>Population</strong>: {country.population.toString().length>6 ? `${country.population/1000000}M` : `${country.population/1000}K`}</p>
                        <p><strong>Region</strong> : {country.region}</p>
                        <p><strong>Capital</strong> : {country.capital}</p>
                </div>
               ))}
        </div>
    )
}


const mapStateToProps=(state)=>({
    countries:state.countries.countries,  
    lightTheme:state.theme.lightTheme, 
});
export default connect(mapStateToProps,{fetchCountries})(ShowCountries);