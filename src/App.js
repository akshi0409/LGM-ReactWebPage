import React, { useState } from "react";
import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
const [users, setUsers] = useState([]);
const loadUsers = async () => {
const response = await fetch("https://reqres.in/api/users?page=1");
const jsonResponse = await response.json();
setUsers(jsonResponse.data);
};
return (
<div className="App">
    <header className = "Navbar">
        <ul>
        <img src={logo} alt="logo"></img>
        <li><a onClick={loadUsers} class = "users">Users</a></li>
        <li><a href = "#home" class = "home">Home</a></li>
        </ul>
    </header>
<ul class="list row">
    
{users.map(({ id, email, avatar, first_name, last_name }) => (

<li class="card col-6">
  
    <img src={avatar} alt="propic"></img>
    <div class="card-body">
<p>User Id: {id}</p>
<p>
Name: {first_name} {last_name}
</p>
<p key={id}>Mail: {email}</p>
    
  </div>
</li>
))}
</ul>
</div>
);
};
export default App;