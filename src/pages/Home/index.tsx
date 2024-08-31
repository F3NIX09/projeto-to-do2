import { useState } from 'react';
import './styles.css';
import '../styles/global.css';

import exclude from '../../assets/exclude.svg';
import cube from '../../assets/clean-cube.svg';
import checkCube from '../../assets/check-cube.svg';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskIcons, setTaskIcons] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setTaskIcons([...taskIcons, cube]); 
      setInputValue('');
      setError(''); 
    } else {
      setError('O campo não pode estar vazio.');
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setTaskIcons(taskIcons.filter((_, i) => i !== index)); 
  };

  const toggleTaskIcon = (index: number) => {
    const updatedIcons = [...taskIcons];
    if (taskIcons[index] === checkCube) {
      updatedIcons[index] = cube;
    } else {
      updatedIcons[index] = checkCube;
    }
    setTaskIcons(updatedIcons);
  };
  
  return (
    <main>
      <section className="header">
        <h2>Registre as suas tarefas diárias</h2>
        <label>Qual a sua tarefa</label>
        <input
          type="text"
          id="expense"
          name="expense"
          placeholder="Digite a sua tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={30}
          required
        />
        <button type="button" onClick={addTask}>
          Agendar tarefa
        </button>
        {error && <p className="error">{error}</p>} 
      </section>

      <section className="task">
        <h1>Tarefas a serem realizadas</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="item-lista">
              <img
                className="exclude"
                src={exclude}
                alt="Excluir"
                onClick={() => removeTask(index)}
                style={{ cursor: 'pointer' }}
              />
              <strong className="list">{task}</strong>
              <img
                src={taskIcons[index]} 
                alt="Icone"
                onClick={() => toggleTaskIcon(index)}
                style={{ cursor: 'pointer' }}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
      