import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

import { Link } from 'react-router-dom'
import Badge from './Badge'

function Blogs({ title, category, imgUrl, excerpt, id, description, handleDelete }) {
    console.log(title, category, imgUrl, excerpt, id, description)
    return (
     
            <MDBCol  size='4'  style={{ padding:'1rem'}} className='mdcol'>
                
                <MDBCard className='no-shrink' style={{ maxWidth: "22rem", }}>
                    <MDBCardImage
                        src={imgUrl}
                        alt={title}
                        position='top'
                        style={{ maxWidth: '100%', height: "180px" }}
                    />
                    <MDBCardBody className='text-center bg-dark text-white'>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <MDBCardText className='text-center'>
                            {excerpt(description)}
                            <Link to={`/blog/${id}`} >  Read more....</Link>
                        </MDBCardText>
                        <Badge>{category}</Badge>
                        <span>
                            <MDBBtn className='mt-1' tag="a" color='none' onClick={() => handleDelete(id)}>
                                <MDBIcon
                                    fas
                                    icon="trash"
                                    style={{ color: "#dd4b39" }}
                                    size='lg'
                                />
                            </MDBBtn>
                            <Link to={`/editeBlog/${id}`}>
                                <MDBIcon
                                    fas
                                    icon="edit"
                                    style={{ color: "#55acee", marginLeft: '10px' }}
                                    size='lg'
                                />
                            </Link>
                        </span>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
    
    )
}

export default Blogs 