import { THEME_CHANGE } from "./types";


export const themeChange=(theme)=>async(dispatch)=>{
    await dispatch({
        type:THEME_CHANGE,
        payload:theme,
    })
}