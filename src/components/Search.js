import { useState,useEffect } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { searchCountry } from "@/actions/countryAction";


//functional component below
const Search=({searchCountry,lightTheme})=>{

    
    const[text,setText]=useState("")

    const getText=(t)=>{
        setText(t);
        
    }

    useEffect(()=>{
        searchCountry(text);
    },[text])

    


    return(
        <div className={`${styles.search} ${lightTheme ? null : styles.dark}`}>
            <span className={styles.icon}><FontAwesomeIcon icon={faSearch} /></span>
            <input type="text" placeholder="Search for countries" value={text} onChange={(e)=>getText(e.target.value)}/>
        </div>
    )
}


const mapStateToProps=(state)=>({
    lightTheme:state.theme.lightTheme,
})


export default connect(mapStateToProps,{searchCountry})(Search); //