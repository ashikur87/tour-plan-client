import React from 'react';
import './Footer.css'


const Footer = () => {
    
    return (
        <div className='bg-dark text-white p-5 footer mt-5 footer'>
            {/* link use for footer */}
<div>
        <a className='m-5' href="https://web.facebook.com/ashikurrahman.ashik.71619533">Facebook</a>
         <a className='m-5' href="https://mail.google.com/mail/u/0/?tab=rm#inbox">E-mail</a>
         <a className='m-5' href="https://www.linkedin.com/feed/">Linkedin</a>
</div>
            <h1>programming Hero Learner</h1>
            <p>@2021,All Rights Reserved By MD.Ashikur Rahman</p>
        </div>
    );
};

export default Footer;