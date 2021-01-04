import {INCREMENT,DECREMENT} from "../constant"

export const Increment = (data) => ({type:INCREMENT,data})
export const Decrement = (data) => ({type:DECREMENT,data})
export const IncrementAsyn = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(Increment(data))
        },time)
    }
}
