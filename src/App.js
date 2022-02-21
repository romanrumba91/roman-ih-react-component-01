// 1. IMPORTACIONES

import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Main from './components/Main/Main';



// 2. FUNCIÓN (COMPONENTE)

function App() {

  // sentencias, instrucciones, lógica
  const name = "Roman"

  // VOY A APLICAR UN FORMATO MUY SIMILAR A HANDLEBARS QUE SE LLAMA JSX
  return ( 
    <div className="App">
      <Header nombre={name} />
      <Main />
    </div>
  );
}

// 3. EXPORTACIÓN
// module.exports = App
export default App;
