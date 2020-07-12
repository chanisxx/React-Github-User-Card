import React from 'react';

function Followers(props) {
    return (

        <div>
            {props.followersData.map(follower => {
                return (
                <div className='folCard' key = {follower.id}>
                    <div>
                        <img className='image' src = {follower.avatar_url} alt='user'/>
                    </div>

                    <div>
                        <h2> {follower.login}</h2>
                        <a href={follower.html_url}>{follower.html_url}</a>
                    </div>
                </div>
            )})}
        </div> 

    );
}

export default Followers