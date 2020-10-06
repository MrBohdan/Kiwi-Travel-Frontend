import React from 'react';
import '../scss/_home.scss';
import {
    BackgroundVideo,
    Navbar
} from '.';
import LogoImage from '../../../assets/logo/logo_full.png';

const UpperFeed = () => {

    const mql = window.matchMedia('(max-width: 340px)');
    let screenResolution = mql.matches;

    return (
        <div className="container-UpperFeed">
            <div className="container-overlay" >
                <BackgroundVideo />
                <header className="header">
                    <div className="container-logo">
                        <div className="logo-img" style={{
                            backgroundImage: `url(${LogoImage})`,
                        }}></div>
                    </div>
                    <div className="container-content">
                        <p className="greeting noselect">С нами ваша безопасность, комфорт и уверенность в путешествии на первом месте</p>
                    </div>
                    <Navbar screenResolution={screenResolution} />
                </header>
            </div>
        </div >
    );
};

export default UpperFeed;
