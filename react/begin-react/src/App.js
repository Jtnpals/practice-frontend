import React, {useRef} from 'react';
import UserList from './UserList'

function App() {
  const users = [
    {
        id: 1,
        username: 'tester1',
        email: 'tester1@gmail.com'
    },
    {
        id: 2,
        username: 'tester2',
        email: 'tester2@gmail.com'
    },
    {
        id: 3,
        username: 'tester3',
        email: 'tester3@gmail.com'
    },
  ]
const nextId = useRef(4);
const onCreate = () => {
  console.log(nextId.current); //4
  nextId.current += 1;
}

  return (
    <UserList users={users}/>
  );
}

export default App;
