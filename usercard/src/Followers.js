import { useEffect } from "react";

export default function Followers (props){
    useEffect(() =>{
        console.log('friends component mounted')
    }, [])

    return (
        <>
        {props.followers.map(follower => (
            <div key={follower.id} className='followers'>
                <img src={follower.avatar_url} alt={follower.login} />
                <div>
                    <h3>
                       {follower.login} 
                    </h3>
                </div>
            </div>
        ))}
        </>
    )

}