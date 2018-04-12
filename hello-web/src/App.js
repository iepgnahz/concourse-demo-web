import React, {Component} from 'react';
import ReactAce from 'react-ace-editor';
import logo from './logo.svg';
import './App.css';


import 'brace/mode/java';
import 'brace/theme/github';

class App extends Component {
  state = {
    code: ""
  }

  handleCommitCode() {

  }

  handleChange(newValue) {
    this.setState({
      code: newValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <ReactAce
            mode="java"
            theme="github"
            style={{height: '400px'}}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <button
          onClick={this.handleCommitCode.bind(this)}
        >
          提交代码
        </button>
      </div>
    );
  }
}

export default App;
