import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
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

export default App;
