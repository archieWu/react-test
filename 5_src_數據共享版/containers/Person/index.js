import { connect } from "react-redux"
import React, { Component } from "react";
import { nanoid } from "nanoid"
import {
    AddPerson
} from "../../redux/actions/person"


class PersonUI extends Component {
    //撰寫狀態控制
    //例：
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id : nanoid(), name, age }
        this.props.addPerson(personObj)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }

    render() {
        return (
            <>
                <h2>當前人有,上方和為{ this.props.count }</h2>
                <input ref ={ c => this.nameNode = c } type = "test" placeholder = "輸入名字"/>
                <input ref = { c => this.ageNode = c } type = "test" placeholder = "輸入年齡"/>
                <button onClick = {this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key = {p.id}>{p.name}--{p.age}歲</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

export default connect(
state => ({
    persons : state.persons,
    count : state.count
}),
    {
        addPerson : AddPerson,
})(PersonUI)