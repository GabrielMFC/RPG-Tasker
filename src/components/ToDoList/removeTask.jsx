function removeTask(index, tasks, setTasks) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

export default removeTask