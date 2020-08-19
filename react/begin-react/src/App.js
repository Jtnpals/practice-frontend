import React, {useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList'
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중');
  return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email:'',
  });
  const {username, email} = inputs;
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }, [inputs]);
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'tester1',
        email: 'tester1@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester2',
        email: 'tester2@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'tester3',
        email: 'tester3@gmail.com',
        active: false
    },
  ]);

const onRemove = useCallback(id =>{
  setUsers(users => users.filter(user => user.id !== id));
}, []);

const nextId = useRef(4);
const onCreate = useCallback(() => {
  const user = {
    id: nextId.current,
    ...inputs
  };
  setUsers(users => [...users, user]); // setUsers(users.concat(user)); push, splice 등 사용하면안됨 불변성유지
  setInputs({
    username: '',
    email: ''
  })
  console.log(nextId.current); //4
  nextId.current += 1;
}, [username, email]);

const onToggle = useCallback(id =>{
  setUsers(users => users.map(
    user => user.id === id ? {...user, active: !user.active}:user
  ));
}, []);

const count = useMemo(()=>countActiveUsers(users), [users]);

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
