import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from  './Components/card-lists/card-list-component'
import {SearchBox} from './Components/Search/Search-Component'
class App extends React.Component
{
  constructor() {
    super();
    this.state={
Monsters:[  
],
SearchFields:''
  };
  
}

handleChange=(e)=>
{

  this.setState({SearchFields:e.target.value})
}
componentWillMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users=>this.setState({Monsters:users}));
}

  render() {
    

return(
  
      <div className="App">

         <SearchBox 
         placeholder="Search Monsters" 
         handleChange={this.handleChange}/>
         <CardList Monsters={this.state.Monsters}/>
     
    </div>
)
  
  }
}

export default App;


