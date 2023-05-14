import { ADD_USER,UPDATE_SCORE } from '../actionTypes/actionTypes'

const initialState={
    name:' ',
    score:{
        gk:0,
        math:0,
        sport:0,
        tnpsc:0
    }
}

export const scoreReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                name:action.username,
            }
        case UPDATE_SCORE:
            return{
                ...state,
                score:{
                    ...state.score,
                    [action.sub]:action.mark
                }
            }
        default:
            return state
    }
}