import { MDBValidation, MDBInput, mdbOn, MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Toast } from "react-toastify"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const innitialstate = {
  title: "",
  description: "",
  category: "",
  imgUrl: "",

}

const option = ["Travel", "Fashion", "Sports", "Fitness", "Food", "Tech"]

//i8thgtdk

function AddBlog() {

  const [formValue, setFormValue] = useState(innitialstate)
  const [descErrMsg, setDesErrMsg] = useState(null)
  const { title, description, category, imgUrl } = formValue

  const handleSubmit = () => {

  }

  const onInputChange = () => {

  }

  const onCategoryChange = () => {

  }

  const onUploadImage = (file) => {
    console.log(file,"file")

  }

  return (
    <div style={{border:'2px solid brown'}}>
      <MDBValidation
        onSubmit={handleSubmit}
        className='row g-2'
        style={{ marginTop: "100px" ,padding:'100px'}}
        noValidate

      >
        <p className='fs-3 fw-bold'
          style={{ margin: 'auto', maxWidth: '400px', alignContent: 'center',  }}>Add Blog</p>

        <MDBInput
          value={title || ""}
          name='title'
          onChange={onInputChange}
          label='Title'
          id='controlledValue'
          type='text'
          required
          validation='please provoide title'
          invalid
        
        />

        <MDBInput
          value={description || ""}
          name='description'
          onChange={onInputChange}
          label='Description'
          id='controlledValue'
          type='text'
          textarea={true}
          rows={4}
          required
          validation='please provoide descripton'
          invalid
        />
        
        <MDBInput

          name='category'
          onChange={(e) => onUploadImage(e.target.files[0])}
          label='Category'
          id='controlledValue'
          type='file'
          required
          validation='please upload img'
          invalid
        />
        <br />

       
        <br />

        <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
          <option>Select Category</option>
          {
            option.map((option , index)=>(
                <option value={option || ""} key={index}>
                    {option}
                </option>  
            ))
          }
        </select>
        <br/>
        <br/>

        <MDBBtn type='submit' style={{margin:'auto',width:"40%",marginTop:'20px'}}>Add</MDBBtn>

        <br/>

        <MDBBtn color='danger' style={{margin:'auto',width:"40%",marginTop:'20px'}} >Go Back  </MDBBtn> 

      </MDBValidation>


    </div>
  )
}

export default AddBlog