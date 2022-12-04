import './scss/App.scss';
import React from 'react';
function App() {
  const [tasks, setDeleteTask] = React.useState([
    {
      id: 0,
      title: 'hello world',
    },
    {
      id: 1,
      title: 'hello world1',
    },
    {
      id: 2,
      title: 'hello world2',
    },
  ]);
  const deleteTaskHandler = (index) => {
    setDeleteTask(tasks.filter((t) => t.id !== index));
  };
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="header__title">react-to-do-list</h1>
        </header>
        <section className="content">
          <form>
            <input type="text" />
            <input type="text" />
            <button className="create-btn">Create task</button>
          </form>
          <div className="tasks">
            <ul>
              {tasks.map((task, index) => (
                <li>
                  <p>{task.title}</p>
                  <button onClick={() => deleteTaskHandler(index)}>delete</button>
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
