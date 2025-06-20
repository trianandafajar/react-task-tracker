import {useState, useEffect, useCallback} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  const fetchApi = useCallback(async (url, options = {}) => {
    const res = await fetch(url, options);
    return res.ok ? res.json() : null;
  }, []);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchApi('http://localhost:5000/tasks');
      setTasks(tasksFromServer || []);
    }
    getTasks();
  }, [fetchApi]);

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = useCallback(async (task) => {
    const data = await fetchApi('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task),
    });
    if (data) setTasks([...tasks, data]);
  }, [tasks, fetchApi]);

  // Delete Task
  const deleteTask = useCallback(async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    if (res.status === 200) setTasks(tasks.filter((task) => task.id !== id));
    else alert('Error Deleting This Task');
  }, [tasks]);

  // Toggle Reminder
  const toggleReminder = useCallback(async (id) => {
    const taskToToggle = await fetchApi(`http://localhost:5000/tasks/${id}`);
    if (!taskToToggle) return;
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const data = await fetchApi(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updTask),
    });
    if (data) setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  }, [tasks, fetchApi]);

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        <Routes>
          <Route path='/' element={
            <>
            { showAddTask && <AddTask onAdd={addTask}/> }
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
            </>
          }/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
