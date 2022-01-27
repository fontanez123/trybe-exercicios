import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['ler course', 'ver video aula', 'fazer exercicios'];

class App extends React.Component {
  render() {
    return(
      compromissos.map((elemento) => Task(elemento))
    )
  }
}

export default App;
