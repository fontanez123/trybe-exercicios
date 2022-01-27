import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
function frase (valor1, valor2, valor3) {
    return <div key={valor1} className='card'> 
        <h4>{`O conteudo é: ${valor1}`}</h4>
        <p>{`Status: ${valor2}`}</p>
        <p>{`Bloco: ${valor3}`}</p>
         </div>
}
class Content extends React.Component {
    render(){
        return <div className='content'> {conteudos.map((elemento) =>
        frase(elemento.conteudo, elemento.status, elemento.bloco))} </div>
    }
}


export default Content;