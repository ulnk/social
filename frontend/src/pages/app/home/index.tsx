import React from 'react';
import { useSelector } from 'react-redux';

import PickleImage from '../../../assets/white.png';
import { HiSearch } from 'react-icons/hi';
import './index.css';

import Post from './post';
import state from '../../../components/util/StateInterface';

const HomePage = () => {
    const tauriApp = useSelector<state>(state => state.app.tauriApp);

    return (<>
        <section className={`homepage ${tauriApp && 'margin'}`}>
            <div className="side-block left padding">
                <div className="thing-container">
                    <div className="search-bar hidden">
                        <div className="pickle-image">
                            <img src={PickleImage} alt="pickle" />
                        </div>
                    </div>
                    <div className="profile-column">
                        <h3 className='follow-header'>Trending Now</h3>
                        <div className="trending-card">
                            <div className="left">
                                <small className="info">Trending Globally</small>
                                <h5 className="trending-title">World Leader Dill Pickle resigns as Chief Executive Officer of Pickle Co.</h5>
                                <small className="info">9.7B Likes</small>
                            </div>
                            <div className="right">
                                <div className="image">
                                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fdbbf4a0d-3ea3-474d-99e3-73266391aced.e90f61f9388cf5c5d0a3d286829a2a85.jpeg%3FodnWidth%3D612%26odnHeight%3D612%26odnBg%3Dffffff&f=1&nofb=1" alt="pickle" />
                                </div>
                            </div>
                        </div>
                        <div className="trending-card">
                            <div className="left">
                                <small className="info">Trending in United Kingdom</small>
                                <h5 className="trending-title">A Clarks now formally classed as Dickhead Clarks</h5>
                                <small className="info">3.8B Pickles</small>
                            </div>
                            {/* <div className="right">
                                <div className="image">
                                    <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t31.18172-8/28161750_10155264702572023_2009689134860014145_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=zkl_nAwh3QQAX8GjlFS&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_iFslIXC0zZrq102XUEz_95-chs4YTrIaXkkwet12kQQ&oe=62EED6A8" alt="pickle" />
                                </div>
                            </div> */}
                        </div>
                        <div className="trending-card">
                            <div className="left">
                                <small className="info">Trending in China</small>
                                <h5 className="trending-title">AliBaba CEO elected CCP Leader after winning 150% of the votes</h5>
                                <small className="info">11.9T Pickles</small>
                            </div>
                            {/* <div className="right">
                                <div className="image">
                                    <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t31.18172-8/28161750_10155264702572023_2009689134860014145_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=zkl_nAwh3QQAX8GjlFS&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_iFslIXC0zZrq102XUEz_95-chs4YTrIaXkkwet12kQQ&oe=62EED6A8" alt="pickle" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle">
                <ul className="pickle-cards">
                    <h2 className="pickle-cards-title">Home</h2>
                    <div className="divider"></div>
                    <Post name='Dill Pickle' handle='@dpickle' content={`tayla peters is a skid`} date={1657223231336} likes={2} favourites={1} />
                    <Post name='pickle alt' handle='@dpickle1' content={`go follow my main account @dpickle`} date={1657223231336} likes={321} favourites={193} />
                    <Post name='Andy Clarke' handle='@dickhead' content={`I AM NOW A DICKHEAD GO FOLLOW ALL MY SOCIALS I WANT MAXIMUM INTERACTIONS`} date={1657223231336} likes={0} favourites={1} />
                    <div className="end">
                        <div className="divider"></div>
                        <h2 className="pickle-cards-title">No more posts...</h2>
                        <small>Come back later.</small>
                    </div>
                </ul>
            </div>
            <div className="side-block right">
                <div className="thing-container">
                    <div className="search-bar">
                        <HiSearch className='seach-bar-icon' />
                        <input type="text" placeholder="Search" spellCheck={false}/>
                    </div>
                    <div className="profile-column">
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
            </div>
        </section>
    </>);
}

export default HomePage;