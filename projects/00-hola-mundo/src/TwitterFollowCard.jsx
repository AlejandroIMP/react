/* eslint-disable react/prop-types */
import { useState } from 'react'
export function TwitterFollowCard ({userName, children, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo': 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    } 
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={imageSrc} alt="el avatar de midudev "/>
                <div className='tw-followCard-info'>
                  <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span> 
                </div>
            </header>
            <aside>
                <button     className={buttonClassName} onClick={handleClick}>
                        <span className=' tw-followCard-text'>{text}</span>
                        <span className='tw-followCard-stopFollow'>Stop Follow</span>
                </button>
            </aside>
        </article>
    )
}