import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggelTodo, deleteTodo }) {


    return (
        <ul className='list'>
            {todos.length === 0 && "אין משימות"}
            {todos.map((todo) => {
                return (
                    <TodoItem {...todo}
                        key={todo.id}
                        toggelTodo={toggelTodo}
                        deleteTodo={deleteTodo} />
                )
            })}
        </ul>
    )
}