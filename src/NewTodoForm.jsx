import React from "react";
import { useState } from "react";

export default function ({onSubmit}) {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form'>
            <div className='form-row'>
                <label htmlFor='item'>משימה חדשה</label>
                <input type="text" id='item'
                    onChange={(e) => setNewItem(e.target.value)}
                    value={newItem} />
            </div>
            <button className='btn'>הוסף למשימה</button>
        </form>
    )
}