import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msg: "Waiting for API"
    }
  }

  componentDidMount() {
      fetch("https://ravfhvaxf4.execute-api.us-west-2.amazonaws.com/demo", {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              msg: "Hello AWS API"
          })
      }).then(response =>{
          if(response.status !== 200) throw new Error("Bad Request");
          return response.json();
      }).then(responseJson => {
          console.log(responseJson);
          this.setState({msg: responseJson.body.msg});
          return responseJson;
      }).catch(err => {
          console.log(err);
      });
  }

    render(){
    return (
        <div className="App">
          <h1>Hello</h1>
          <h2>{this.state.msg}</h2>
        </div>
    );
  }

}

export default App;
