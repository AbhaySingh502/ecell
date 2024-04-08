import React from 'react'
import { Link } from 'react-router-dom';
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
                                    <Link to="/" className="nav-link active text-white text-decoration-none">HOME</Link>
                                </li>

                                <li class="nav-item dropdown me-4">
                                    <Link to='/About' class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ABOUT US
                                    </Link>

                                    <ul class="dropdown-menu">
                                        <li><Link to="/Vision" className="dropdown-item nav-link active text-white text-decoration-none">VISION</Link></li>
                                        <li><Link to="/Team" className="dropdown-item nav-link active text-white text-decoration-none">TEAM</Link></li>
                                        <li><Link to="/Gallery" className="dropdown-item nav-link active text-white text-decoration-none">GALLERY</Link></li>
                                    </ul>


                                </li>
                                <li class="nav-item me-4">
                                    <Link to="/Initiatives" className="dropdown-item nav-link active text-white text-decoration-none">INITIATIVES</Link>
                                </li>
                                <li class="nav-item me-4">
                                    <Link to="/Form" className="dropdown-item nav-link active text-white text-decoration-none">CONTACT US</Link>
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