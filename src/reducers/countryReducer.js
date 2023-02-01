import { FETCH_COUNTRIES,SEARCH_COUNTRY,SEARCH_REGION } from "@/actions/types";


const initialState={
    countries:[]
};

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_COUNTRIES:
            return{
                ...state,
                countries:action.payload
            }
        case SEARCH_COUNTRY:
            return{
                countries:action.payload   
            }
        case SEARCH_REGION:
            return{
                countries:action.payload
            }
        default:
            return state;
    }
}