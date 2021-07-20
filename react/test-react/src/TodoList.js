import { any } from "prop-types";
import React from "react";

// class TodoItem extends React.Component{
//     render(){
//         const{todo} = this.props;
//         return (
//             <li>
//                 {todo}
//             </li>
//         );
//     }
// }

// function TodoItem({todo}){
//     return <li>{todo}</li>
// }

const TodoItem = ({ todo }) => <li>{todo}</li>;

class TodoList extends React.Component {
  state = {
    todoList: ["파이썬 공부", "리액트 공부"],
    current: '',
  };

  onChange = (e) => {
    const {value} = e.target;
    this.setState({
        current: value,
    })
  }

  onKeyDown = (e) => {
      if( e.keyCode===13){
          const { todoList, current}=this.state;
          if( current.trim().length >0){
          this.setState({
              current: '',
              todoList: [...todoList, current.trim()],
          })
        }
      } 
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
            <input value={this.state.current} onChange={this.onChange} onKeyDown={this.onKeyDown}></input>
            <hr></hr>
            {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default TodoList;
