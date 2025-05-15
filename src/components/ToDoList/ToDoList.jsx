import TaskItem from "./TaskItem"
import { useState } from "react"
import addTask from "./addTask"
import removeTask from "./removeTask"

function ToDoList() {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])
    return(
        <div>
            <h1>To-Do List</h1>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={() => addTask(task, tasks, setTasks, setTask)}>Add Task</button>

            <ul>
                {tasks.map((t,i) => (
                    <TaskItem key={i} task={t} onRemove={() => removeTask(i, tasks, setTasks)} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList