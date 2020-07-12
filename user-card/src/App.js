import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';
import Followers from './Followers';


class App extends React.Component {
  constructor() {
    super();
    this.state= {
      user: [],
      followers: [],
      searchTerm: '',
      searchResults: []
    }
    console.log('constructor() executed')
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    axios.get('https://api.github.com/users/chanisxx')
    .then(response => {
      console.log('API "User" Response', response)
      this.setState({ user: response.data })
    })
    .catch(err => {
      console.log('API "User" Error', err)
    })

    axios.get('https://api.github.com/users/chanisxx/followers')
    .then(response => {
      console.log('API "Followers" Response', response)
      this.setState({ followers: response.data })
    })
    .catch(err => {
      console.log('API "Followers" Error', err)
    })

    const results = this.state.followers.filter(object => object.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    this.setState({searchResults: results})

    console.log('componentDidMount() executed');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate executed')
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
    console.log('handleChage executed', event.target.value)
  }

  componentWillUnmount() {
  }

  render() {
    console.log('render() executed')
    return (
      <div className="App">
        <Card userData = {this.state.user}/>
        <h3>Followers:</h3>
        <input type='text' input={this.state.searchTerm} handleChange={this.handleChange} onChange={this.handleChange} value = {this.state.searchTerm} name='searchTerm'/>
        <Followers followersData = {this.state.followers}/>
      </div>
    );
  }
}

export default App;
