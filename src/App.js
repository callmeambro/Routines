import './App.css';
import Header from './Component/Header.js';

function App() {
  let data='Hai';
  let name='Alan';
  return (
    <div className="App">
      <Header  name={name}/>
      <div>
        <p style={{color:"red"}}>{data} world</p>
        
      </div>
    </div>
  );
}

export default App;

/* Small component 
function Small(){
  return(
  <div>
    <h3>Hello world</h3>
  </div>
  )
}*/