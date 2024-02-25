import axios from 'axios'
import { MDBBtn, MDBContainer, MDBIcon, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from './Badge'

function Blog() {

  let [data, setData] = useState()

  let { id } = useParams()

  useEffect(() => {
    if (id) {
      singleBlogData()

    }

  }, [id])


  const singleBlogData = async () => {
    let response = await axios.get(`https://65db12483ea883a152911707.mockapi.io/blog/${id}`)
    setData(response.data)
    if (response) {
      console.log(response.data)
    }
    else {
      console.log("ot geting")
    }
  }

  const styleInfo = {
    display: 'inline',
    marginLeft: '5px',
    float: 'right',
    marginTop: "7px"
  }

  return (
    <MDBContainer style={{ border: "2px solid #d1ebe", padding: '30px' }}>
      {/* <link to="/" /> */}

      <MDBBtn style={{ float: 'left', color: "black", marginTop: '10px' }} href='/'>Go Back</MDBBtn>

      <MDBTypography tag="h2" className='text-muted mt-2 mx-5' style={{ display: 'inline-block' }}>
        {data && data.title}
      </MDBTypography>

      <img src={data && data.imgUrl} className='img-fluid rounded' alt='data && data.title' style={{ width: "100%", height: '50vh' }} />

      <div style={{ marginTop: '20px' }}>

        <div className={{ height: '43px', background: '#f6f6f6' }}>

          <MDBIcon style={{ float: 'left' }} className='mt-3' far icon='calender-alt' size='lg' />

          <strong>
            {data && data.date}
          </strong>

          <Badge styleInfo={styleInfo} >{data && data.category}</Badge>

        </div>

        <MDBTypography className='lead md-0'>
          {data && data.description}
        </MDBTypography>
      </div>
    </MDBContainer>
  )
}

export default Blog