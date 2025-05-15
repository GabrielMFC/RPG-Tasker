function addTask(task, tasks, setTasks, setTask) {
        if (task.trim()) {
            setTasks([task, ...tasks])
            setTask("")
        }
}

export default addTask