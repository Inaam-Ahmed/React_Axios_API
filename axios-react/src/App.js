import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm'
import axios from "axios";
import OutputTable from './components/OutputTable'
class App extends Component {

  state = {
    repositories: " ",
    blog: " ",
    repUrl: " "
  }
  
  getUser = (event) => {
    event.preventDefault();
    const user = event.target.elements.username.value;
    if(user){
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      const repositories = res.data.public_repos;
      const blog = res.data.blog;
      const repUrl = res.data.repos_url;
      this.setState({repositories,blog,repUrl})
    })}
    else this.resetState();
  }

  resetState = () =>{
    this.state.setState = {
    repositories: " ",
    blog: " ",
    repUrl: " "
  }

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Asynchronous HTTP calls using the API https://api.github.com/users/ </h1>
        </header>
        <UserForm getUser={this.getUser}/>
        <OutputTable 
        repositories={this.state.repositories} 
        blog={this.state.blog} 
        repurl={this.state.repUrl}
        resetState = {this.resetState}
        >Git Hub Info</OutputTable>
      </div>);
    }
}

export default App;
