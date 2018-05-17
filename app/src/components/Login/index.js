import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '123213@163.com',
      password: '23242'
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);

    console.log(this.axios)
  }
  handleChange (name, event) {
    let obj = {};
    obj[name] = event.target.value;
    this.setState(obj);
  }

  login () {
    console.log('get--------------------')
    this.axios.get('./api/playlist/hot', {})
      .then(function (res) {
        console.log(res);
      })
  }

  render () {
    return (
      <div className="login">
        <from>
          <label><input name="email" type="text" value={this.state.email} onChange={(e) => {this.handleChange('email', e)}} /></label>
          <label><input name="password" type="text" value={this.state.password} onChange={(e) => {this.handleChange('password', e)}} /></label>
          <div>
            <button onClick={this.login}>登陆</button>
          </div>
        </from>
      </div>
    )
  }
}