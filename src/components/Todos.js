import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo, i) => (
            <h3 key={i}>
                <TodoItem
                    todo={todo}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}
                />
            </h3>
        ));
        <div />;
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};
