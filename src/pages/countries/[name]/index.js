import styles from "./Country.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import { connect } from "react-redux";


const Country=({country,lightTheme})=>{
    return (
        <div className={`${lightTheme ? null : styles.dark}`}> 
            <Navbar/>
            <Link href={"/countries/All"}><button className={`${styles.back} ${lightTheme ? styles.light : styles.dark}`}><FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>  Back</button></Link>
            <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={country[0].flags.svg} alt={`Flag of ${country[0].name.common}`}/>
            </div>
            <div className={styles.containerText}>
                <h1>{country[0].name.common}</h1>
                <div>
                    <ul>
                        <li><strong>Native Name : </strong>{Object.values(country[0].name.nativeName)[0].common}</li>
                        <li><strong>Population : </strong>{country[0].population}</li>
                        <li><strong>Region : </strong>{country[0].region}</li>
                        <li><strong>Sub-Region : </strong>{country[0].subregion}</li>
                        <li><strong>Capital: </strong>{country[0].capital}</li>
                        <li><strong>Top Level Domain : </strong>{country[0].tld}</li>
                        <li><strong>Currencies : </strong>{country[0].name.common=="Bouvet Island" ? "NA" :  Object.keys(country[0].currencies)[0]  }</li>
                        <li><strong>Languages : </strong>{Object.values(country[0].languages).map((lang,id)=>(<span key={id}>{lang}</span>))}</li>
                    </ul>
                    <div className={styles.containerBorder}>
                        <strong>Border Countries :</strong> {country[0].borders ? country[0].borders.map((border,id)=>(<Link key={id} href={`/countries/${border}`}><button className={` ${lightTheme ? styles.light : styles.dark}`} key={id}>{border}</button></Link>)) : "No Borders"}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export const getServerSideProps=async (context)=>{
    const res=await fetch(`https://restcountries.com/v3.1/alpha/${context.params.name}`);
    const country=await res.json();

    return {
        props:{country}
    }
}

const mapStateToProps=(state)=>({
    lightTheme:state.theme.lightTheme
})
export default connect(mapStateToProps,{}) (Country);