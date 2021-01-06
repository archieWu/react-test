import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react";
import {
    increment,
    decrement,
    incrementAsyn
 } from "../../redux/actions/count"


const Count = () => {
    
    const count = useSelector(state => state.count);
    const persons = useSelector(state => state.persons.length);
    const [selectNumber, setSelectNumber] = useState(1);
    const dispatch = useDispatch();
    const add = () => {
         dispatch(increment(selectNumber))
         
     }
    const subtract = () => {
         dispatch(decrement(selectNumber))    
     }
    const incrementIfOdd = () => {
         if (count % 2 !== 0) {
            dispatch(increment(selectNumber))
         }
 
     }
    const incrementAsync = () => {
         dispatch(incrementAsyn(selectNumber,500))
     }
    
    return (
        <>
            <h1>當前求和為:{count},下方總人數為：{persons}</h1>
            <select onChange={c => setSelectNumber(c.target.value*1)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>&nbsp;
            <button onClick={add}>+</button>&nbsp;
            <button onClick={subtract}>-</button>&nbsp;
            <button onClick={incrementIfOdd}>當前和為奇數+當前和為奇數+</button>&nbsp;
            <button onClick={incrementAsync}>異步+</button>


        </>
    )
     
 }

export default Count;
