import React, {useEffect, useState} from 'react';
import {TwitterShareButton, TwitterIcon} from 'react-share';

const TweetButton: React.FC = () => {
    const [showDonate, setShowDonate] = useState(false);
    const url = `${process.env.SITE_URL}`;

    useEffect(() => {
        setShowDonate(process.env.SHOW_TWEET === 'true');
    }, []);

    if (!showDonate) {
        return null;
    }

    return (
        <div className="flex  mt-5">
            share

            <TwitterShareButton
                className="w-7 ml-2"
                hashtags={['gpt3', 'componentgenerator', 'aigenerator', 'chatgpt', 'uigenerator']}
                url={url} title="Check out this AI component generator!">
                <TwitterIcon size="small" round/>
            </TwitterShareButton>
        </div>
    );
};

export default TweetButton;
