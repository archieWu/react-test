import CountUI from "../../components/Count"
import { connect } from "react-redux"
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsynAction
 } from "../../redux/count_action"

export default connect(
    state => ({count : state}),
    { 
    increment : createIncrementAction,
    decrement : createDecrementAction,
    incrementAsyn : createIncrementAsynAction
    })(CountUI)

