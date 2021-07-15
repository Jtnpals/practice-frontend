import 'App.css';
import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Counter from 'Counter';

class App extends React.Component {

  onChange = (e) => {
    const { value } = e.target;
    console.log('changed value :', value)
  };

  render(){
    return (
    <>
      <Counter onClick={() => console.log("clicked")}/>
    <input onChange={this.onChange}/>
    </>
  );
    }
};

App.defaultProps = {
  region: 'Seoul'
};

App.propTypes = {
  name : PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default App;
