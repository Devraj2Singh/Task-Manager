import React, { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await API.get("/tasks");
      // Defensive: ensure we have an array
      if (Array.isArray(res.data)) {
        setTasks(res.data);
      } else if (res.data && Array.isArray(res.data.tasks)) {
        // in case backend wraps response
        setTasks(res.data.tasks);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.error("fetchTasks error:", err);
      setError(err?.response?.data?.message || err.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    // call fetchTasks but avoid state update if unmounted
    (async () => {
      setLoading(true);
      try {
        const res = await API.get("/tasks");
        if (!isMounted) return;
        if (Array.isArray(res.data)) setTasks(res.data);
        else if (res.data && Array.isArray(res.data.tasks)) setTasks(res.data.tasks);
        else setTasks([]);
      } catch (err) {
        console.error("fetchTasks error:", err);
        if (!isMounted) return;
        setError(err?.response?.data?.message || err.message || "Failed to load tasks");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm fetchTasks={fetchTasks} />

      <div style={{ marginTop: 12, marginBottom: 12 }}>
        <button onClick={fetchTasks} style={{ padding: "8px 10px" }}>
          Refresh
        </button>
      </div>

      {loading && <p>Loading tasks…</p>}
      {error && (
        <div style={{ color: "red", marginBottom: 12 }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {!loading && !error && tasks.length === 0 && <p>No tasks yet — add one above.</p>}

      <div className="task-list">
        {tasks.map((task) => {
          const key = task._id || task.id || JSON.stringify(task); // fallback
          return <TaskCard key={key} task={task} fetchTasks={fetchTasks} />;
        })}
      </div>
    </div>
  );
};

export default Home;
