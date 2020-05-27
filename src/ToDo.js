import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`${id}`}>
                {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownprops) {
    return {
        onBtnClick: id => dispatch(actionCreator.deleteToDo(ownprops.id))
    }
}
export default connect(null, mapDispatchToProps)(ToDo)