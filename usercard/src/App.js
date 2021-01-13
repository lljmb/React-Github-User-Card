import React from 'react';
import axios from 'axios';
import Followers from './Followers'

class App extends React.Component {
  // set the state of the users
  state = {
    users: [], 
    followers: []
  }

  // retrieve user from API
  componentDidMount(){
    axios
    .get('https://api.github.com/users/lljmb')
    .then(res => {
      this.setState({
        users: res.data 
      })
    })
    .catch(error => {
      console.log('error:', error)
    })
  }

  componentDidUpdate(){
    axios
    .get('https://api.github.com/users/lljmb/followers')
    .then(res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch(error => {
      console.log('error:', error)
    })
  }



  // view
  render(){
   return(
    <div className='App'>
        <img src={this.state.users.avatar_url} alt='user profile'/>
        <h2>{this.state.users.name}</h2>
        <a href={this.state.users.html_url}>{this.state.users.html_url}</a>
        <p>{this.state.users.bio}</p>
  
    <div className='container'>
    <h1>Hello Friends!</h1>
    
    <Followers followers={this.state.followers} />
    </div>
    </div>
   )
  }


}


export default App;
