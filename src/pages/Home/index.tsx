import'./styles.css'
import'../styles/global.css'

import exclude from '../../assets/exclude.svg'
import cube from '../../assets/clean-cube.svg'
import cheackcebe from '../../assets/check-cube.svg'

export default function Home(){
  return (
    <main>
      <section className="header">
        <h2>Registre as suas tarefas diarias</h2>

        <label>Qual a sua tarefa</label>
        <input type="text" id="expense" name="expense" placeholder="Digite a sua tarefa" required></input>

        <button type = "submit">Agendar tarefa</button>
      </section>

      <section className="task">
        <h1>Tarefas a serem realizadas</h1>

        <ul>
          <li className="item-lista">
            <img className="exclude" src={exclude} alt="" />
            <strong className="list">test</strong>
            <img src={cube} alt="" />
          </li>
          <li className="item-lista">
          <img className="exclude" src={exclude} alt="" />
            <strong className="list">teste555</strong>
            <img src={cube} alt="" />
          </li>
          <li className="item-lista">
          <img className="exclude" src={exclude} alt="" />
          <strong className="list">teste55555555555</strong>
            <img src={cube}  alt="" />
          </li>
        </ul> 
      </section>

    </main>
  )
}