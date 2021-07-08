import 'App.css';
import { Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import Counter from 'Counter';

function App({name, age}) {
  return (
    <div>
      <Button type="primary" onClick={() => console.log("Clicked")}>Click Me</Button>
      name : {name}
      <br/>
      age : {age}
      <Counter onClick={() => console.log("clicked")}/>
    </div>
  );
};

App.defaultProps = {
  region: 'Seoul'
};

App.propTypes = {
  name : PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default App;
