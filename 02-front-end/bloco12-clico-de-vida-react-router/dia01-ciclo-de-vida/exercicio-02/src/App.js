import React from 'react';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      loading: true,
      objetoApi: undefined,
      listaPessoas: []
    }
  }

  async requisicaoApi () {
    const response = await fetch('https://api.randomuser.me/')
    const objeto = await response.json();

    this.setState({ objetoApi: objeto});
  }

  componentDidMount() {
    this.requisicaoApi();
  }

  pessoasApi() {
    const { objetoApi } = this.state;
    return objetoApi.results.map((pessoas, index) => (
      <div key={index}>
      <p>{`Name: ${pessoas.name.first} ${pessoas.name.last}`}</p>
      <p>{<img src={pessoas.picture.large} alt={pessoas.name.first}/>}</p>
      <p>{`Age: ${pessoas.dob.age}`}</p>
      <p>{`Email: ${pessoas.email}`}</p>     
      </div>
      
    ))
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState);
    const AGE = 50;
    if (nextState.objetoApi.results[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  listaCompleta

  render(){
    const { objetoApi } = this.state;
    const loading = 'loading...'
    return (
      <div>
        {objetoApi ? this.pessoasApi() : loading}
      </div>
    )
  }
}

export default App;
