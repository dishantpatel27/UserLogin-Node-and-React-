import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: ""
    }
  }
  handleChangeName = (event)=>{
    var inputName = event.target.value;
    if(inputName != null || ""){
      this.setState({name: event.target.value});
    }
  }
  handleChangePassword = (event) =>{
    var inputPassword = event.target.value;
    if(inputPassword != null || ""){
      this.setState({password: event.target.value});
    }
  }
  handleSubmit = (event) => {
    if((this.state.name === "" || null) || (this.state.password === "" ||null)){
      alert("Please Input all the fields");
    }else{
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({username: this.state.name,password: this.state.password}), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => console.log(res.json()))
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="form-horizontal" style={{marginTop: 120,marginLeft: 350}}>
        <div className="form-group">
        <br></br>
        <label className="control-label col-sm-2" htmlFor="username">Name:</label>
        <div className="col-sm-10">
          <input style={{width: '50%'}} className="form-control" id="username" placeholder="Enter Name" name="username" type="text" value={this.state.name} onChange={this.handleChangeName} />
         </div>
         </div>
         <br></br>
         <div className="form-group">
        <label className="control-label col-sm-2" htmlFor="pwd" >Password:</label>
        <div className="col-sm-10">
          <input style={{width: '50%'}} type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.handleChangePassword} />
        </div>
        </div>
        <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </div>
      </form>
      </div>
    );
  }
}

export default App;
