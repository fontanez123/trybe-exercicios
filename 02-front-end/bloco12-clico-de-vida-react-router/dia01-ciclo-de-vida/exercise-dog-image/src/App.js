import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      objetoApi: undefined,
      nome: '',
      array: [],
    };

    this.maisDog = this.maisDog.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState);
    if (nextState.objetoApi.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(_prevProps, prevState) {
    const { objetoApi } = this.state;
    localStorage.setItem('urlDog', objetoApi.message);
    if (prevState.objetoApi !== objetoApi) {
      const raca = objetoApi.message.split('/')[4];
      alert(raca);
    }
  }

  onChangeInput(evento) {
    const { target } = evento;

    this.setState({ nome: target.value });
  }

  async fetchApi() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    this.setState({ objetoApi: data });
  }

  maisDog() {
    /* const { objetoApi } = this.state;
    this.setState((estado) => ({
      listaDogs: [...estado.listaDogs, objetoApi],
    })); */
    this.fetchApi();
  }

  render() {
    const { objetoApi, nome } = this.state;
    const loading = 'Loading...';
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={ this.onChangeInput }
            placeholder="Digite o nome"
            value={ nome }
          />
        </div>
        {objetoApi ? <img src={ objetoApi.message } alt="Cachorrinho" /> : loading}
        <div>
          <button type="button" onClick={ this.maisDog }>Mais 1 doguinho!</button>
        </div>
      </div>
    );
  }
}

export default App;
