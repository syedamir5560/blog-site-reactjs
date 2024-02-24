import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit'
import React from 'react'

import { Link } from 'react-router-dom'

function Home({title,category,imgUrl,excerpt,id,description,handleDelete}) {
  return (
    <div>
        <MDBCol  size='4' >
          <MDBCard className='h-100 mt-2' style={{maxWidth:"22rem"}}>
              <MDBCardImage
               src={imgUrl}
               alt={title}
               position='top'
               style={{maxWidth:'100%',height:"180px"}}

              
              />

              <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
                  {excerpt(description)}
                  <link to={`/blog/${id}`}  >Read More...</link>
                </MDBCardText>
                <p>{category}</p>
                <span>
                  <MDBBtn className='mt-1' tag="a" color='none' onClick={()=>handleDelete(id)}></MDBBtn>
                </span>
              </MDBCardBody>
               
            
          </MDBCard>


        </MDBCol>
    </div>
  )
}

export default Home