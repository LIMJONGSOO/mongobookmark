import React, {Component} from 'react';
import logo from '/srassets/images/logo.png';
import './App.scss';

export default class Main extends Component {
  state = {users: []}

  conponentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }
  
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user => 
          <div key={user._id}>{user.name} {user.age}</div>
        )}
      </div>
    )
  );
}
