import axios from 'axios'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import Blogs from './Blogs'

import { Link } from 'react-router-dom'
import Blog from './Blog'

function Home() {

  let [data, setData] = useState([])
  useEffect(() => {
    loadBlogsData()
  }, [])

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + " ... ";
    }
    return str
  }

  let handleDelete =async (id) => {

    if(window.confirm("Are You Sure ?")){

      let response = await axios.delete(`https://65db12483ea883a152911707.mockapi.io/blog/${id}`)
      if (response) {
          // console.log("blog deleted")
          loadBlogsData()
      }
      else {
        console.log("not")
      }

    }



  }

  const loadBlogsData = async () => {
    let response = await axios.get('https://65db12483ea883a152911707.mockapi.io/blog')
    if (response) {
      setData(response.data)
      
    }
    else {
      alert("not sent data")
    }
  };

  console.log("data", data)
  return (
    <div>
      <MDBRow>
        {!data.length && (
          <MDBTypography className="text-center mb-0" tag="h2" style={{marginTop:"5vw" , color:"red"}}>No Blog Found</MDBTypography>
        )}
        <MDBCol>
          <MDBContainer>

            <MDBRow className='flex-container'>
              {
                data && data.map((item, index) => (
                  <Blogs
                    key={index}
                    {...item}
                    excerpt={excerpt}
                    handleDelete={handleDelete} />
                ))
              }
            </MDBRow>
          </MDBContainer>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default Home