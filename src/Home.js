import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import ToDo from "./ToDo";

function Home({ toDos, addToDO }) {
    const [text, setText] = useState("");

    function onChange(e) {
        setText(
            e.target.value
        );
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDO(text)
        setText(
            ''
        );
    }

    return (
        <>
            <h1>TO DO</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(todo => (
                    <ToDo {...todo} key={todo.id} />
                ))}
            </ul>
        </>
    )
}

function getCurrentState(state) {
    return { toDos: state };
}
function mapDistpathToProps(dispatch) {
    return {
        addToDO: text => dispatch(actionCreator.addToDO(text))
    };
};

export default connect(getCurrentState, mapDistpathToProps)(Home); //mapstatetoProps mapDistpathToProps
