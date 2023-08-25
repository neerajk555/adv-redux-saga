import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostsList from './PostList';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <PostsList />
        </div>
      </Provider>
    
 
  );
}

export default App;
