import './scss/App.scss';
import React from 'react';
function App() {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('');
  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };
  const addNewTask = () => {
    const taskNew = {
      id: Date.now(),
      title: input,
    };
    console.log(taskNew);
    setTasks([...tasks, taskNew]);
  };
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="header__title">react-to-do-list</h1>
        </header>
        <section className="content">
          <form onClick={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Enter the title for your task."
              onChange={(event) => setInput(event.target.value)}
            />
            <button className="create-btn" onClick={addNewTask}>
              Create task
            </button>
          </form>
          <div className="tasks">
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  <p>{task.title}</p>
                  <button onClick={() => deleteTaskHandler(task)}>delete</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
