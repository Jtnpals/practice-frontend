import React, {useEffect, useContext} from 'react';
import {UserDispatch} from './App';

const User = React.memo(function User({ user}) {
    const dispatch = useContext(UserDispatch)
    // useEffect(()=>{
    //     console.log(user);
    //     return () => {
    //         console.log('user값이 바뀌기 전');
    //         console.log(user);
    //     }
    // }, [user]);
    // useEffect(() =>{
    //     console.log('컴포넌트가 화면에 나타남'); //props->state rest API  D3 Video.js setInterval etc  ...
    //     return ()=>{
    //         //clearInterval, clearTimeout, 라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐');
    //     }
    // }, []);
  return (
    <div>
      <b style={{color: user.active ? 'blue' : 'black',
       cursor:'pointer'
       }} onClick={()=> dispatch({type:'TOGGLE_USER', id: user.id})}>
           {user.username}</b> <span>({user.email})</span>
      <button onClick={()=> dispatch({type:'REMOVE_USER', id: user.id})}>삭제</button>
    </div>
  );
});

function UserList({ users}) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id}/>
      ))}
    </div>
  );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);