import React, { useState } from 'react';

import { HiOutlineHeart, HiOutlineLink, HiOutlineStar } from 'react-icons/hi';

interface PostProps {
    name: string;
    handle: string;
    content: string;
    date: number;
    likes: number;
    favourites: number;
}

const Post = (props: PostProps) => {
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);


    return (<li className="pickle-card">
        <div className="pickle-card-profile">
            <div className="image">🥒</div>
        </div>
        <div className="pickle-card-content">
            <div className="username">
                <span className="name">{props.name}</span>
                <span className="handle">{props.handle}</span>
                <span className="date">•</span>
                <span className="date">{new Date(props.date).toLocaleDateString()}</span>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="card-buttons">
                <div onClick={() => setLiked(x => !x)} className={`card-button ${liked && 'heart'}`}>
                    <HiOutlineHeart />
                    <span>{props.likes + (liked ? 1 : 0)}</span>
                </div>
                <div onClick={() => setFavorited(x => !x)} className={`card-button ${favorited && 'star'}`}>
                    <HiOutlineStar />
                    <span>{props.favourites + (favorited ? 1 : 0)}</span>
                </div>
                <div className="card-button">
                    <HiOutlineLink />
                </div>
            </div>
        </div>
    </li>);
}

export default Post;