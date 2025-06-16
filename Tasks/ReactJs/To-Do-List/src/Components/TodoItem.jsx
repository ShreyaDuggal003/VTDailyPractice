import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";
import { LuPencilLine} from "react-icons/lu";
import { IoIosSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function TodoItem({ todo }) {

    const[isTodoEditable, setIsTodoEditable] = useState(false)
    const[todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  ${todo.completed ? "bg-[#c6e9a7] " : "bg-[#141414]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent text-white rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <button
                className="inline-flex justify-center items-center "
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } 
                    else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <IoIosSave style={{color: "white"}} /> : <LuPencilLine style={{color: "white"}}/>}
            </button>
            
            <button
                className="inline-flex  justify-center items-center"
                onClick={() => deleteTodo(todo.id)}
            >
                <MdDelete style={{color: "white"}} />   
            </button>
        </div>
    );
}

export default TodoItem;







