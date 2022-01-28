import React from 'react';
import Image from './Image';
import Gato from './gato.jpg'


class App extends React.Component {
  render() {
    return (
    
        <Image source={Gato}
         alternativeText="Cute cat staring" />
      
      
    )
  }
}

export default App;
