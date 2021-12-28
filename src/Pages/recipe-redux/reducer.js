import { FETCH_RECIPE_FAILURE, FETCH_RECIPE_START, FETCH_RECIPE_SUCCESS } from "./actionTypes"

const initialState = {
    loading: false,
    userdata:[],
    error : ''
}

export const recipeReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_RECIPE_START : return {
            ...state,
            loading: true
        }
        case FETCH_RECIPE_SUCCESS: return {
            ...state,
            loading : false,
            userdata : action.payload
        }
        case FETCH_RECIPE_FAILURE : return {
            ...state,
            loading : false,
            error: action.payload
        }
        default : return{
            ...state
        }
    }
}