import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [fri, setFriends] = useState([]);
    useEffect( () => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())
       .then(data => setFriends(data));
    },[])
    return (
        <div>
            <h2>Hello friends. How are you?</h2>
            <p><small>Nice to meet all of you!:{fri.length}</small></p>
            {
              fri.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;