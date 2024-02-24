// import React from 'react'
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';



function Header() {

    const [show, setShow] = useState(false);

    return (
        <MDBNavbar expand='lg' bgColor='light' className='nav'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>
                    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" style={{ height: "50px", width: "100px" }} />
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                 
                    aria-label='Toggle navigation'
                    onClick={() => setShow(!show)}
                >
                    <MDBIcon icon='bars' fas />

                </MDBNavbarToggler>
                <MDBCollapse open={show} navbar id='navbarColor02' style={{fontSize:'1.2rem',fontWeight:'600',marginLeft:'20px'}}>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <MDBNavbarLink aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/addblog'>Add Blog</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header