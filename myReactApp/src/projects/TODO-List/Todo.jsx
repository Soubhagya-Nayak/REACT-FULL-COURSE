import { useState } from "react";
import "./Todo.css";
import { MdCheckCircle, MdDelete } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }
    return (
        <section className="todo-container">
            <header>
                <h1>TODO List</h1>
            </header>

            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                                <li key={index}>
                                    <span>{curTask}</span>
                                    <button className="check-btn"><MdCheckCircle /></button>
                                    <button className="delete-btn"><MdDelete /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}