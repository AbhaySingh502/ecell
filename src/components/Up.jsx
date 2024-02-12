import React from 'react';
import '../css/up.css';

function Up() {
    return (
        <div className='up'>
            <div className="sv position-relative">
                <div className="semi position-absolute start-50 translate-middle z-1" style={{ top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    <span className='fs-6'>WANT TO KNOW MORE?</span>
                    <span className='fs-1'>CONTACT US</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0753B7" fillOpacity="1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    );
}

export default Up;
