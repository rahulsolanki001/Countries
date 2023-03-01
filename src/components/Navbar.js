import {useState} from "react";
import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon , faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { themeChange } from "@/actions/themeAction";
const Navbar=({themeChange,lightTheme})=>{
    const [lightMode,setLightMode]=useState(true);

    const changeTheme=()=>{
        const updatedTheme= lightTheme ? false : true
        themeChange(updatedTheme)
    }
    
    
    return(
        <>
        <nav className={`${styles.navbar} ${lightTheme ? styles.light : styles.dark}`} >
            <h1>Where in the world?</h1>
            <button className={`${lightTheme ? null : styles.dark}`} onClick={()=>{changeTheme()}>{lightMode ? <FontAwesomeIcon icon={ faMoon} />:<FontAwesomeIcon icon={faLightbulb} /> } {lightMode ? "Dark" : "Light"} Mode</button>
        </nav>
        </>
    )

}

const mapStateToProps=(state)=>({
    lightTheme:state.theme.lightTheme,
})


export default connect(mapStateToProps,{themeChange}) (Navbar);
