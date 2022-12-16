import './scss/App.scss';
import Header from './components/Header';
import Tasks from './components/Tasks/Tasks';
import React from 'react';
function App() {
  const [tasks, setTasks] = React.useState([{ text: 'Hello, i am a standart task. Edit me!' }]);

  const createTask = () => {
    const text = prompt('Enter your task name:');
    setTasks([...tasks, { text }]);
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  const clearTasks = () => {
    setTasks([]);
  };
  const editTask = (index) => {
    const text = prompt('Enter new task name:');
    setTasks(
      tasks.map((obj, i) => {
        if (index === i) {
          return { ...obj, text: text };
        }
        return obj;
      }),
    );
  };
  return (
    <div className="container">
      <div className="app-container">
        <Header />
        <section className="app-content">
          <button onClick={createTask}>Create tasks</button>
          <button onClick={clearTasks}>Clear tasks</button>
          <Tasks
            createTask={createTask}
            setTasks={setTasks}
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
