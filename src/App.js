


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './cardComponent';
import {Spinner,Button} from "react-bootstrap";


const name="Utkarsh";


const changeText=()=>
{
  console.log("Hello");
}



//props

class App extends Component
{
  constructor()
  {
    super();

    this.state={
      users:[],
      loading:true
    }
  }

   compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const fnA = a.firstName.toUpperCase();
    const fnB = b.firstName.toUpperCase();
  
    let comparison = 0;
    if (fnA > fnB) {
      comparison = 1;
    } else if (fnA < fnB) {
      comparison = -1;
    }
    return comparison;
  }
  

  onSortUsers()
  {
    const Users=this.state.users;

    Users.sort(this.compare);

    console.log(Users);


    this.setState({users:Users})
  }

  markChildBusy(id)
  {
    console.log(id+" Child Clicked");

    

    let updatedUsers=this.state.users.filter(element => 
      element.id!=id
    )

    console.log(updatedUsers);

    this.setState({
      users:updatedUsers
    })

  }

  displayUsers()
  {
    console.log("Function Called");

    if(this.state.loading)
    {
    return( <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>);
    }
    else
    {
      return (
        <div>
        <Button onClick={this.onSortUsers.bind(this)} variant="primary" size="lg" > Sort Users</Button>
        {
        this.state.users.map(element =>
              <CardComponent user={element} onHide={this.markChildBusy.bind(this)}   />)
        }
        </div>     
      )
    }
  }



  componentDidMount()
  {
  //  console.log("Component is mounted")

  fetch("https://dummyapi.io/data/api/user",
  {
    method:'GET',
    headers:{
      "Content-Type":"application/json",
      "app-id":"oCeVwp0TOdm6ECfBeqfQ"
    }
  })
  .then(res=>res.json())
  .then(data =>

    this.setState({
      users:data.data,
      loading:false
      }))
  }



  render()
  { 
    console.log(this.state);

    return(
      <div className="App">
      <h1> Code Asylums </h1>
      <h1> { name } </h1>
      
       { this.displayUsers() }
       
      </div>

    )
  }

}









//functional component 



// function App() {
//   return (
//     <div className="App">

//     <h1> Code Asylums </h1>
//     <h1> { name } </h1>
//     {

//       employees.map( element =>
//                  <CardComponent element={element} />)
                 
//     }

//     </div>
//   );
// }

export default App;