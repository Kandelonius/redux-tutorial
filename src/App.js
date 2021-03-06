import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store';


import Posts from "./components/Posts";
import PostsForm from "./components/PostsForm";

// const store = createStore(() => [], {}, applyMiddleware());


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostsForm />
            <hr />
          </header>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;