const fs = require('fs').promises;

const meuArquivo = 'simpsons.json'
const novoArquivo = 'novoSimpsons2.json'

/* function readAll() {
 fs.readFile(meuArquivo, 'utf-8')
 .then((data) => {
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    
    strings.forEach((string) => console.log(string));
 })
} */


function novoArray(){
    fs.readFile(novoArquivo, 'utf-8')
    .then((data) => {
        const simpsons = JSON.parse(data)        
        const filtered = simpsons.filter(elemento => elemento.name !== "Nelson Muntz");
        filtered.push({id: "5", name: "Maggie Simpson"});


        fs.writeFile(novoArquivo, JSON.stringify(filtered));
    })
}

function main() {
    novoArray();
  }
  
  main();