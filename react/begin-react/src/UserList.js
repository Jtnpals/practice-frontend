import React from 'react';

function User({user}){
    return(
        <div>
        <b>{user.username}</b><span>({user.email})</span>
    </div>
    );
}

function UserList(){
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
            id: 2,
            username: 'tester3',
            email: 'tester3@gmail.com'
        },
    ]

    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                    // (user, index) => (<User user={user} key={index}/>) 특별한 아이디값이 없으면 어쩔수없이 map의 index사용 ->성능은 저하됨
                )
            }
        </div>
    )
}

export default UserList;