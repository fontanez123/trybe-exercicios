import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cliquesButton01 : 0,
      cliquesButton02 : 0,
      cliquesButton03 : 0
    }
    this.button01 = this.button01.bind(this);
    this.button02 = this.button02.bind(this);
    this.button03 = this.button03.bind(this);
    this.mudarCor = this.mudarCor.bind(this);
  }

  button01() {
    this.setState((estadoInicial, _props) => ({
      cliquesButton01: estadoInicial.cliquesButton01 + 1
    }), () => console.log(this.mudarCor(this.state.cliquesButton01)));
    
  }
  
  button02() {
    this.setState((estadoInicial, _props) => ({
      cliquesButton02: estadoInicial.cliquesButton02 + 1
    }))
  }
  
  button03() {
    this.setState((estadoInicial, _props) => ({
      cliquesButton03: estadoInicial.cliquesButton03 + 1
    }))
  }

  mudarCor(numero) {
    return numero % 2 === 0 ? 'green' : 'white'
  }

  render(){
    const { cliquesButton01, cliquesButton02, cliquesButton03} = this.state
    return(
      <div>
        <button onClick={this.button01}
        style={{backgroundColor : this.mudarCor(cliquesButton01)}}>{cliquesButton01}</button>
        <button onClick={this.button02}
        style={{backgroundColor : this.mudarCor(cliquesButton02)}}>{cliquesButton02}</button>
        <button onClick={this.button03}
        style={{backgroundColor : this.mudarCor(cliquesButton03)}}>{cliquesButton03}</button>
      </div>
    )
  }
}

export default App;
