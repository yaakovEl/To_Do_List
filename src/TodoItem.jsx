import React from "react";


export default function TodoItem({completed, id, title, toggelTodo, deleteTodo}) {
    return (
        <li>
            <label>
                <input type='checkbox'
                    checked={completed}
                onChange={e => { toggelTodo(id, e.target.checked) }}
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className='btn btn-danger'>מחק</button>
        </li>
    )
}