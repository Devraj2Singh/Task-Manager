import React from "react";
import API from "../api";

const TaskCard = ({ task, fetchTasks }) => {
  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskCard;
