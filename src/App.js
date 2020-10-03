import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addCounter} from './store';



// Clases



class App extends React.Component{
  handleClick(){
    const {dispatch} = this.props;
    dispatch(addCounter());
    console.log("AAAAAAAAAAA")
  };
  render(){
    return (
    <><p>El valor es: {this.props.counter} </p>
      <button onClick={()=>this.handleClick()}>+1 lince</button></>
      )
  }
}

function mapStateToProps(state){
  return{
    counter: state.counter
  }
}
export default connect(mapStateToProps)(App);
// Funciones
// function App() {
//   return (
//     <div>
    
//     </div>
//   );
// }


// hoc -> High order component