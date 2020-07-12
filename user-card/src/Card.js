import React from 'react';

function Card(props) {
    return (
        <div className='userCard' key = {props.userData.id}>
            <div className='cont'>
                <img className='image' src = {props.userData.avatar_url} alt='user'/>
                <h1> hi, {props.userData.login} :) </h1>
                <p style={{color: '#414848'}}>{props.userData.bio}</p>
            </div>

            <p>{props.userData.location}</p>
            <a href={props.userData.html_url}>{props.userData.html_url}</a>

            <div className='cont2'>
                <p style = {{borderRight: 'lightgrey solid .5px', width:'50%', padding: '10px 0'}}><span>Followers:</span> {props.userData.followers}</p> 
                <p style={{width: '50%'}}><span>Following:</span> {props.userData.following}</p>
            </div>
            {/* {  GitHubCalendar(".calendar", "chanisxx", { responsive: true })} */}
        </div>   
    );
}

export default Card