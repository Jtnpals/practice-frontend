import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(()=>{
        console.log(user);
        return () => {
            console.log('user값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);
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
       }} onClick={()=> onToggle(user.id)}>
           {user.username}</b> <span>({user.email})</span>
      <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle}) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;