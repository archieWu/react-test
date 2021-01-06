import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "nanoid"
import {
    addPerson
} from "../../redux/actions/person"

const Person = () => {
    const nameNode = useRef();
    const ageNode = useRef();
    const count = useSelector(state => state.count)
    const persons = useSelector(state => state.persons)
    const dispatch = useDispatch();
    const addPersons = () => {
        const name = nameNode.current.value;
        const age = ageNode.current.value;
        const personObj = { id : nanoid(), name, age }
        dispatch(addPerson(personObj))
        nameNode.current.value = '';
        ageNode.current.value = '';
    }
    return (
        <>
            <h2>當前人有,上方和為{ count }</h2>
            <input ref ={ nameNode } type = "test" placeholder = "輸入名字"/>
            <input ref = { ageNode } type = "test" placeholder = "輸入年齡"/>
            <button onClick = {addPersons}>添加</button>
            <ul>
                {
                    persons.map((p)=>{
                        return <li key = {p.id}>{p.name}--{p.age}歲</li>
                    })
                }
            </ul>
        </>
    )

}

export default Person;