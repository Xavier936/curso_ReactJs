
import React from 'react';
import './App.css';

/*function Helloworld(props){
  return(
  <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.mytext}
  </div>
  );
}*/

class Helloworld extends React.Component {
  state = {
    show: true
  }

toggleShow = () => {
  this.setState({show: !this.state.show})
}   

  render () {
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
      );
    }else{
      return <h1>
        No hay elementos
        <button onClick={this.toggleShow}>Cambiar estadado</button>
        </h1>
    }
    
  }
}

//const App = () => <div> este es mi componente: <Helloworld/> </div>

/*class App extends React.Component{
  render(){
    return <div>este es mi componente: <Helloworld/></div>
  }
}*/
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Alexis" subtitle="loremp ipsum"/> 
      <Helloworld mytext="que mas" subtitle="qwwet"/> 
      <Helloworld mytext="que onda" subtitle="sxcsdc"/>
    </div>
  );
}

export default App;
