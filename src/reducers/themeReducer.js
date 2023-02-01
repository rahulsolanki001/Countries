import { THEME_CHANGE } from "@/actions/types";

const initialState={
    lightTheme:true
}

export default (state=initialState,action)=>{
    switch(action.type){
        case THEME_CHANGE:
            return {
                lightTheme:action.payload
            }
        default:
            return state;
    }
}