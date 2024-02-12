import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
function Footer() {
    return (
        <div className="footer">

            <div class="h-20 w-20" style={{ background: "#D9D9D9" }}>
                <div className="up d-flex justify-content-center flex-column pt-5 flex">
                    <span className="one" style={{ fontSize: "2rem" }}>ENTREPRENEURSHIP CELL, IIT JAMMU</span>
                    <span className="two" style={{ fontSize: "1.2rem" }}>for partnership opportunities
                        mail at xyz@gmail.com</span>
                </div>

                <div className="mid d-flex justify-content-between px-5">
                    <div className="left d-flex" style={{ width: "22%" }}>
                        <div class="col mb-3">
                            <h5 style={{ fontWeight: "600" }}>ABOUT US</h5>
                            <ul class="nav flex-column" style={{ fontWeight: "550" }}>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Vision</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Team</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Gallery</a></li>
                            </ul>
                        </div>
                        <div class="col mb-3 text-start">
                            <h5 style={{ fontWeight: "600" }}>Phone</h5>
                            <ul class="nav flex-column" style={{ fontWeight: "550" }}>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">901554XXXX</a></li>
                            </ul>
                            <h5 style={{ fontWeight: "600" }}>Email</h5>
                            <ul class="nav flex-column" style={{ fontWeight: "550" }}>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">alkddlkadjj</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                                <button class="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="bottom">
                    <div className="bu mb-3">
                        <InstagramIcon color='primary' fontSize='large' style={{ marginRight: "1rem" }} />
                        <LinkedInIcon color='primary' fontSize='large' style={{ marginRight: "1rem" }} />
                        <XIcon color='primary' fontSize='large' style={{ marginRight: "1rem" }} />
                    </div>

                    <div className="bb d-flex flex-column">
                        <span style={{ fontWeight: "510", fontSize: '1.2rem' }}>ADDRESS</span>
                        <span>Idea Factory, I2EDC Lab, 01AC-520, IIT Jammu, Jagti, NH 44, Nagrota, Jammu- 181221</span>
                    </div>
                </div>
                <div className="last text-start px-3">© 2024 Copyright: E-Cell IIT Jammu</div>
            </div>
        </div>
    )
}

export default Footer