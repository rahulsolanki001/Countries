import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Filter from "@/components/Filter";
import ShowCountries from "@/components/ShowCountries";
import Link from "next/link";
import {connect } from "react-redux";

const All=({lightTheme})=>{
    return(
    <div className={lightTheme ? null : "dark"}>
        <Navbar/>
        <div id="search-filter">
            <Search/>
            <Filter/>
        </div>
        <ShowCountries/>
    </div>
    )
}

const mapStateToProps=(state)=>({
    lightTheme:state.theme.lightTheme,
})
export default connect(mapStateToProps,{})(All);
