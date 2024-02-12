import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
function Header() {
    return (
        <div className='header'>
            <div className="header_one " style={{ backgroundColor: "#043B83" }}>
                <div className="main d-flex justify-content-end align-items-center p-2">
                    <span className='text-white me-2 fs-4'>Follow Us: </span>
                    <InstagramIcon sx={{ color: '#fff' }} style={{ marginRight: "1rem", fontSize: "2rem" }} />
                    <LinkedInIcon sx={{ color: '#fff' }} style={{ marginRight: "1rem", fontSize: "2rem" }} />
                    <XIcon sx={{ color: '#fff' }} style={{ marginRight: "1rem", fontSize: "2rem" }} />

                </div>
            </div>
            <div className="header_two " style={{ backgroundColor: "#06479D" }}>

                <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
                    <div class="container-fluid">
                        <img src="./logo_white.png" alt="" style={{ width: "50px" }} />
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item me-4">
                                    <a class="nav-link active text-white" aria-current="page" href="#">HOME</a>
                                </li>

                                <li class="nav-item dropdown me-4">
                                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ABOUT US
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">VISION</a></li>
                                        <li><a class="dropdown-item" href="#">TEAM</a></li>
                                        <li><a class="dropdown-item" href="#">GALLERY</a></li>
                                    </ul>


                                </li>
                                <li class="nav-item me-4">
                                    <a class="nav-link text-white" href="#">EVENTS</a>
                                </li>
                                <li class="nav-item me-4">
                                    <a class="nav-link text-white" href="#">CONTACT US</a>
                                </li>
                                <li class="nav-item me-4">
                                    <a class="nav-link text-white" href="#">UDYAMISTAV'24</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header