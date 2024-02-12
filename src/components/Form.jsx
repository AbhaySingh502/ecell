import React from 'react'
import '../css/form.css'
function Form() {

    return (
        <>
            <div className="form" >
                <h1 style={{ color: '#0753B7' }}>Get in Touch</h1>
                <span>Write to us what you have on your mind</span>

                <div className="main" style={{ margin: '0 5rem' }}>
                    <div className="left p-4" style={{ width: '50%', backgroundColor: '#0753B7', color: '#fff' }}>
                        <span className='d-flex fs-1'>Tell us About you</span>
                        <div className="hl" style={{ width: '10%', borderBottom: '2px solid white', marginLeft: '5px' }}></div>
                        <div className="form_main">
                            <li style={{ listStyle: 'none' }}>

                                <div className="input-feild d-flex flex-column">
                                    <span className='fs-4 text-start'>Name*</span>
                                    <input type="text" required />
                                    <span class="focus"></span>
                                </div>

                            </li>
                        </div>
                    </div>
                    <div className="right">
                        <div class="text-area">
                            <textarea name="" cols="30" rows="30" placeholder="Your message" required></textarea>
                            <span class="focus"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form