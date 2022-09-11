import './App.css';
import React from "react";
import axios from "axios";



  class App extends React.Component {
    state ={
      inputPass:""
    }

    backEnd = () => {
      axios.get("http://localhost:8989/update-password",{
        params: {
          password: this.state.inputPass
        }
      })

        .then(response => {
          console.log(response.data)
        })

    }


    changePass  = (e) => {
      this.setState({
        inputPass: e.target.value
      })
  }

  aLetter = () => {
      let letter = false
    for (let i = 0; i < this.state.inputPass.length; i++) {
      if (this.state.inputPass[i] >= "a" && this.state.inputPass[i] <="z"){
        letter = true;
        break;
      }
    }
      return  letter;
  }

  aNumber = () => {
      let number = false;
    for (let i = 0; i < this.state.inputPass.length; i++) {
      if (this.state.inputPass[i] >= "0" && this.state.inputPass[i] <= "9"){
        number = true;
        break;
      }
    }
    return number;
  }








    render() {
    const tooShort = this.state.inputPass.length < 7;
    const tooLong =  this.state.inputPass.length >15;
    const aNumber = this.aNumber();
    const aLetter = this.aLetter();


      return(
        <div>

            <input onChange={this.changePass} value={ this.state.inputPass}/>

            {
              !tooLong && !tooShort && aNumber && aLetter ?
                <div>

                  <button onClick={this.backEnd}>Submit</button>

                </div>



              :
                <div>


                  <div style={{color: !tooLong? "green": "red" }}>Less then 15 Characters { tooLong&& "V"}</div>
                  <div style={{color:!tooShort ? "green" : "red"}}>Above 6 Characters { !tooShort&& "V"} </div>
                  <div style={{color:aNumber ? "green" : "red"}}>contains number{aNumber && "V"} </div>
                  <div style={{color:aLetter? "green": "red"}}>contains letter{aLetter && "V"} </div>

                </div>







            }






        </div>
      )

    }


}

export default App;
