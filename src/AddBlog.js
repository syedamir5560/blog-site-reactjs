import { MDBValidation, MDBInput, mdbOn, MDBBtn, MDBDropdownMenu, MDBDropdownItem, MDBDropdownItems, MDBDropdownToggle, MDBDropdown } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
// import { Toast, toast } from "react-toastify"
import { ToastContainer, toast } from 'react-toastify';
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
  const [catErrMsg, setCatErrMsg] = useState(null)
  const { title, description, category, imgUrl } = formValue



  let getDate = () => {
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, "0")
    let month = String(today.getMonth() + 1).padStart(2, "0")
    let yyyy = today.getFullYear();

  }

  let navig = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()
    if (!category) {
      setCatErrMsg("Please Select Category !!")
    }
    if (title && description && imgUrl && category) {
      const currentDate = getDate()
      const updatedBlogDate = {
        ...formValue, date: currentDate
      }
      const response = axios.post("https://65db12483ea883a152911707.mockapi.io/blog", updatedBlogDate)
      if (response) {
        alert("blog created successfully")
      }
      else {
        alert("fails")
      }
      setFormValue({
        title: "",
        description: "",
        category: "",
        imgUrl: ""
      })
      navig('/')
    }

  }

  const onInputChange = (e) => {

    setFormValue({
      ...formValue, [e.target.name]: e.target.value
    })

  }

  const onCategoryChange = (e) => {

    setCatErrMsg(null)
    setFormValue({
      ...formValue, category: e.target.value
    })

  }

  const onUploadImage = (file) => {
    // console.log(file,"file")

    const formData = new FormData()
    formData.append("file", file)
    console.log(formData)
    // formData.append('Clo')
    formData.append('upload_preset', 'i8thgtdk')
    axios.post('http://api.cloudinary.com/v1_1/do4lomwfi/image/upload', formData)
      .then((res) => {
        console.log(res)
        // tostSuccess()
        // alert("File Upload succesfully")
        setFormValue({
          ...formValue, imgUrl: res.data.url
        })
        console.log(res.data)

      }).catch((error) => {
        console.log(error)
        // toast.info("Something went wrong")
      })
  }

  return (
    <div style={{ border: '2px solid brown' }} className='adbcont'>
      <MDBValidation
        onSubmit={handleSubmit}
        className='row g-2'
        style={{ marginTop: "100px", padding: '25px', }}
        noValidate

      >
        <p className='fs-3 fw-bold'
          style={{ margin: 'auto', maxWidth: '400px', alignContent: 'center', }}>Add Blog</p>

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
          invalid='true'
        />

        <MDBInput
          onChange={(e) => onUploadImage(e.target.files[0])}
          label=''
          id='controlledValue'
          type='file'
          validation='please upload img'
          invalid
        />
        <select className='categoryDropdown' onChange={onCategoryChange} value={category}>
          <option>Select Category</option>
          {
            option.map((option, index) => (
              <option value={option || ""} key={index}>
                {option}
              </option>
            ))
          }
        </select> 

       
        {
          setCatErrMsg && (
            <div className='setCatErrMsg'>{catErrMsg}</div>
          )
        }


        <br />
        <br />

        <MDBBtn type='submit' style={{ margin: 'auto', width: "30%", marginTop: '10px' }}>Add</MDBBtn>

        <br />

        <MDBBtn color='danger' style={{ margin: 'auto', width: "30%", marginTop: '10px' }} href='/'>Go Back  </MDBBtn>

      </MDBValidation>


    </div>
  )
}

export default AddBlog