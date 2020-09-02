import React from 'react';

export const LittleGiphyIcon = () => {

    const littleIconUrl = "https://media0.giphy.com/media/3xz2BDFvxop2BfAQoM/100w.gif?cid=6f54fedeoerrqrxeblu5mj93k2ryzyd366dbj9sca30ajebk&rid=100w.gif";

    return (
        <div>
            <div className="smallContainer">
                <div className="small animate__animated animate__backInDown">
                    <a href="https://developers.giphy.com/" alt="" target="_blank" rel="noopener noreferrer">
                        <div>Powered by GIPHY</div>
                        <div className="extraSmall"><img src={ littleIconUrl } alt=""></img></div>
                    </a>
                </div>
            </div>
            <h2>Gif Expert App</h2>
        </div>
    )
}
