import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p className="copyright">
                &copy; 2019&#8202;&#8211;&#8202;{ new Date().getUTCFullYear() } Dustin Hamano. All Rights Reserved.
            </p>
            <p>
                Weather pulled from <a href="https://www.metaweather.com/" target="_blank" rel="noopener noreferrer">www.metaweather.com</a>.
            </p>
        </footer>
    )
}

export default Footer;