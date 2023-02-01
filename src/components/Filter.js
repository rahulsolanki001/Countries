import styles from "./Filter.module.css"
import { connect } from "react-redux";
import { searchRegion } from "@/actions/countryAction";

const Filter=({searchRegion,lightTheme})=>{
    return(
        <>
            <select defaultValue={"default"} onChange={(e)=>searchRegion(e.currentTarget.value)} className={` ${styles.filter}  ${lightTheme ? styles.light : styles.dark} `}>
                <option value="default" hidden disabled>Select a Region</option>
                <option value="Africa" >Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )
}


const mapStateToProps=(state)=>({
    lightTheme:state.theme.lightTheme,
})
export default connect(mapStateToProps,{searchRegion})(Filter);


