import React, { Component } from "react";

// Ícones do Formulário
import { FaAngleDoubleRight } from "react-icons/fa";

// Ícones das Tarefas
import { CiEdit, CiClose } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

// Importação de arquivos CSS
import './form.css'
import './Main.css'

// Componente Principal
export default class Main extends Component {
  state = {
    novaTarefa: '', // Estado para a nova tarefa
    tarefas: [], // Estado para a lista de tarefas
  };

  // Função para lidar com a submissão do formulário
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    // trim() remove espaços em branco no início e fim da string
    novaTarefa = novaTarefa.trim();

    // Verifica se a tarefa já existe ou se está vazia
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    if (novaTarefa.length === 0) return;

    // Cria um novo array de tarefas incluindo a nova tarefa
    const novasTarefas = [...tarefas, novaTarefa];
    
    // Atualiza o estado do componente
    this.setState({
      tarefas: novasTarefas, // Atualiza a lista de tarefas
      novaTarefa: '' // Limpa o campo de entrada
    });
  }

  // Função para lidar com as mudanças no campo de entrada
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value // Atualiza o estado da nova tarefa
    });
  }

  // Método de renderização do componente
  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefa</h1>

        {/* Formulário de entrada */}
        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button className="btn" type="submit">
            <FaAngleDoubleRight />
          </button>
        </form>

        {/* Lista de Tarefas */}
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <div className="btnTarefas">
                <CiEdit className="edit" />
                <IoMdClose className="close" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
