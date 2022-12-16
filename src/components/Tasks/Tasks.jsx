import React from 'react';
import styles from './Tasks.module.scss';

function Tasks({ tasks, deleteTask, editTask }) {
  return (
    <div className={styles.root}>
      <ul>
        {tasks.map((task, index) => (
          <li>
            <div className="name">
              <p>{task.text}</p>
            </div>
            <div className="buttons">
              <button onClick={() => deleteTask(index)}>DELETE</button>{' '}
              <button onClick={() => editTask(index)}>EDIT</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
