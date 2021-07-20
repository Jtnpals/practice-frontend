import 'App.css';
import Counter from 'Counter';
import Message from 'Message';
import Profile from 'Profile';
import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div>
        <Counter/>
        <Profile/>
        <Message/>
      </div>
    );
  }
};

export default App;
