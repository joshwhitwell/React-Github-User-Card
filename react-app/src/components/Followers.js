import React from 'react'

export default function Followers(props) {
    const { followers } = props
    return (
        <div className='followers'>
            {followers.map(follower => 
                <div className='follower' key={follower.id}>
                    <h3>{follower.login}</h3>
                    <img width='100px' src={follower.avatar_url} alt={follower.name} />
                </div>
            )}
        </div>
    )
}