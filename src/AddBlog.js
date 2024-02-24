import { MDBValidation, MDBInput, mdbOn, MDBBtn } from 'mdb-react-ui-kit'
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

let tostSuccess=()=>toast.success('🦄 Wow so easy!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",

  });

const option = ["Travel", "Fashion", "Sports", "Fitness", "Food", "Tech"]

//i8thgtdk

function AddBlog() {

  const [formValue, setFormValue] = useState(innitialstate)
  const [catErrMsg, setCatErrMsg] = useState(null)
  const { title, description, category, imgUrl } = formValue



  let getDate=()=>{
      let today = new Date()
      let dd = String(today.getDate()).padStart(2,"0")
      let month = String(today.getMonth()+1).padStart(2,"0")
      let yyyy=today.getFullYear();

  }

  let navig=useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()
    if (!category) {
      setCatErrMsg("Please Select Category !!")
    }
    if(title && description && imgUrl && category){
      const currentDate=getDate()
      const updatedBlogDate = {
        ...formValue ,date:currentDate
      }
      const response = axios.post("http://localhost:5000/blog",updatedBlogDate)
      if(response){
          alert("blog created successfully")
      }
      else{
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
    // formData.append('Clo')
    formData.append('upload_preset', 'i8thgtdk')
    axios.post('http://api.cloudinary.com/v1_1/do4lomwfi/image/upload', formData)
      .then((res) => {
        // console.log(res)
        // tostSuccess()
        alert("File Upload succesfully")

        setFormValue({
          ...formValue, imgUrl: res.data.url
        })

     

      }).catch((error) => {
        // console.log(error)
        // toast.info("Something went wrong")
      })
  }

  return (
    <div style={{ border: '2px solid brown' }}>
      <MDBValidation
        onSubmit={handleSubmit}
        className='row g-2'
        style={{ marginTop: "100px", padding: '100px' }}
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
          required
          validation='please upload img'
          invalid
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
/>
        <br />
        <br />

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

        <MDBBtn type='submit' style={{ margin: 'auto', width: "40%", marginTop: '20px' }}>Add</MDBBtn>

        <br />

        <MDBBtn color='danger' style={{ margin: 'auto', width: "40%", marginTop: '20px' }} >Go Back  </MDBBtn>

      </MDBValidation>


    </div>
  )
}

export default AddBlog