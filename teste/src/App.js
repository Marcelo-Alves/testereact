import './App.css';
import Fextos from './components/Textos'

function App() {
  function texto(){
    return <h2>texto super aliatório</h2>
  }
  return (
    <div className="App">
      <p> Ola mundo OS</p>
      {texto()}
      <Fextos />
    </div>
  )
}

export default App