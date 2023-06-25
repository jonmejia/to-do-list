'use client'
import { useState } from "react";
const Form = () => {
    const [Task, setTask] = useState("")
    const handleInput = (e:any) =>{
        setTask(e.target.value)
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        console.log(Task)
        setTask("")
    }
    return (
    <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="inputText" className="block text-gray-700 text-sm font-bold mb-2">Task</label>
            <input type="text" className="border border-gray-300 rounded-lg p-2 w-full" value={Task} onChange={handleInput}/>
        </div>
            <button
            type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
        </div>
        );
    };

export default Form;
