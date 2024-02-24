import axios from 'axios'
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Blog() {

let [data , setData] = useState()

let {id} = useParams()

useEffect(()=>{
  if(id){
    singleBlogData()

  }
 
},[id])

  const singleBlogData=async()=>{
    let response = await axios.get(`http://localhost:5000/blog/${id}`)
    setData(response.data)
    if(response){
      console.log(response.data)
    }
    else{
      console.log("ot geting")
    }
  }

  const styleInfo={
    display:'inline',
    marginLeft:'5px',
    float:'right',
    marginTop:"7px"
  }

  return (
   <MDBContainer style={{border: "1px solid #d1ebe"}}>
    <link to="/">
      <strong style={{float:'left',color:"black"}} className='mt-3'>GO Back </strong>
    </link>
   
    <MDBTypography tag="h2" className='text-muted mt-2' style={{display:'inline-block'}}>
      {data && data.title}
    </MDBTypography>

    <img src={data && data.imgUrl} className='img-fluid rounded' alt='data && data.title' style={{width:"100%" , height:'600px'}}/>

    <div style={{marginTop:'20px'}}>

    </div>
   </MDBContainer>

   

  )
}

export default Blog