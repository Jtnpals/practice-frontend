import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
      {/* 주석 작성도 중괄호로 감쌈*/}
      <Hello 
        //태그내에는 이런식으로 주석 작성
      />
      <div style={style}>{name} 두개 이상의 태그는 감싸줘야함</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
