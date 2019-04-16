import React, { Component } from 'react';
import './App.css';
import Draw from './Draw'

class App extends Component {

  state = {
    numbers: [],
    number: "---",
    index: -1,
    iID: 1,
    finish: false
  }


  handleDraw = () => {

    let numbers = []
    for (let i = 0; i < 50; i++){

      let number = Math.floor(Math.random() * 6 + 1)
      numbers.push(number)
         
      this.setState({
        number,
        numbers,
        index: -1
      })
  }
    

  let iID = setInterval(()=>{
    this.setState({
        index: this.state.index + 1,
        iID
    })
  }, 50)

}


// componentDidUpdate(){
//   if(this.state.index === this.state.numbers.length){
//     clearInterval(this.state.iID)
//     this.setState({
//       finish: true
//     })
//    }
// }


  render() {
    if(this.state.index === this.state.numbers.length){
      clearInterval(this.state.iID)
     }
    return (
      <div className="app">
        <>
        <h1>Losowanie liczby od 1 do 6</h1>
        <Draw number={this.state.number} numbers={this.state.numbers} draw={this.handleDraw} index={this.state.index} finish={this.state.finish}/>
        </>
      </div>
    );
  }
}

export default App;
