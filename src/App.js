import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasUpdate: undefined };
  }

  componentWillMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React 2</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.hasUpdate !== undefined && (this.state.hasUpdate ? (
          <p className="sw-notification">Une mise à jour est disponible. Veuillez rafraîchir l'application.</p>
        ) : (
          <p className="sw-notification">L'application est maintenant en cache et prête à être utilisée hors ligne.</p>
        ))}
      </div>
    );
  }
}

export default App;