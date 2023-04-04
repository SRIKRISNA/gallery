import React, { useState } from 'react'
import axios from 'axios';
import './add.css';

const AddImage = ({Close}) => {
  const [formData, setFormData] = useState({
    label:"",
    image:""
  });

  const convertbase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  })
  const uploadImage = async (e) =>{
    const file = e.target.files[0];
    const base64 = await convertbase64(file);
    setFormData({...formData, image:base64});
  }

  const handleForm = () => {
    // console.log(formData);
    axios({
      url:"http://localhost:5000/images/add",
      method:"POST",
      headers:{},
      data:formData})
    .then((res)=>{
      console.log(res);
      alert("uploaded...!!")
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='addimage-modal'>
        <form className='form' method='POST'>
            <button onClick={Close} className='close'> X </button>
            <h2>Add a new Photo</h2>
            <label>Label</label><br/>
            <input type='text' placeholder='add name of image' id='label' value={formData.label} onChange={(e)=>{setFormData({...formData, label:e.target.value})}}></input><br/>
            <label>Upload Image</label><br/>
            <input type='file' onChange={(e) => uploadImage(e)} /><br/>
            <button onClick={Close} className='cancel'> Cancel </button>
            <button type='submit' id='submitform' onClick={handleForm} >Submit</button>
        </form>
    </div>
  )
}

export default AddImage