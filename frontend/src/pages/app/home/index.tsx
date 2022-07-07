import React from 'react';

import './index.css';
import { HiSearch } from 'react-icons/hi';

import Post from './post';

const HomePage = () => {
    return (<>
        <section className="homepage">
            <div className="side-block left"></div>
            <div className="middle">
                <ul className="pickle-cards">
                    <h2 className="pickle-cards-title">Home</h2>
                    <div className="divider"></div>
                        <Post name='Dill Pickle' handle='@dpickle' content={`tayla peters is a skid`} date={1657223231336} likes={2} favourites={1} />
                        <Post name='pickel alt' handle='@dpickle1' content={`go follow my main account @dpickle`} date={1657223231336} likes={321} favourites={193} />
                    <div className="end">
                        <div className="divider"></div>
                        <h2 className="pickle-cards-title">No more posts...</h2>
                        <small>Come back later.</small>
                    </div>
                </ul>
            </div>
            <div className="side-block right">
                <div className="search-bar">
                    <HiSearch className='seach-bar-icon' />
                    <input type="text" placeholder="Search" spellCheck={false}/>
                </div>
                <div className="who-to-follow">
                    <h3 className='follow-header'>Who to follow</h3>
                    <div className="follow-card">
                        <div className="profile">
                            <div className="profile-picture">🥒</div>
                        </div>
                        <div className="content">
                            <span className="name">Dill Pickle</span>
                            <span className="handle">@dpickle</span>
                        </div>
                        <button className="following">Following</button>
                        {/* <button className="follow">Follow</button> */}
                    </div>
                    <div className="follow-card">
                        <div className="profile">
                            <div className="profile-picture">🥒</div>
                        </div>
                        <div className="content">
                            <span className="name">pickle alt</span>
                            <span className="handle">@dpickle1</span>
                        </div>
                        {/* <button className="following">Following</button> */}
                        <button className="follow">Follow</button>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default HomePage;