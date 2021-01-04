import { connect } from "react-redux"
import React, { Component } from "react";
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsynAction
 } from "../../redux/count_action"


class CountUI extends Component {
 
     increment = () => {
         const { value } = this.selectNumber
         this.props.increment(value*1)
         
     }
     decrement = () => {
         const { value } = this.selectNumber
         this.props.decrement(value*1)
         
     }
     incrementIfOdd = () => {
         const { value } = this.selectNumber
         const count = this.props.count
         if (count % 2 !== 0) {
             this.props.increment(value*1)
         }
 
     }
     incrementAsync = () => {
         const { value } = this.selectNumber
         this.props.incrementAsyn(value*1,500)
     }
     render() {
         return (
             <>
                 <h1>當前求和為:{this.props.count}</h1>
                 <select ref={c => this.selectNumber = c}>
                     <option value='1'>1</option>
                     <option value='2'>2</option>
                     <option value='3'>3</option>
                 </select>&nbsp;
                 <button onClick={this.increment}>+</button>&nbsp;
                 <button onClick={this.decrement}>-</button>&nbsp;
                 <button onClick={this.incrementIfOdd}>當前和為奇數+當前和為奇數+</button>&nbsp;
                 <button onClick={this.incrementAsync}>異步+</button>
 
 
             </>
         )
     }
 }

export default connect(
    state => ({count : state}),
    { 
    increment : createIncrementAction,
    decrement : createDecrementAction,
    incrementAsyn : createIncrementAsynAction
    })(CountUI)

