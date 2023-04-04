import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
// import img1 from '../assests/1.jpg';
import './gallery.css';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((res) => {
        let display = res.data.reverse();
        setGallery(display);
      }).catch((err) => {
        console.log(err);
      })
  }, []);

  function DeleteImg(_id){
    axios.delete(`http://localhost:5000/images/delete/${_id}`)
    .then((res)=>{
      const updateList = gallery.filter((item) => item._id !== _id);
      setGallery(updateList);
      console.log("img deleted...");
    }).catch((err)=>{
      console.log(err);
    })
  }
  
  return (
    <div className='galleryContainer'>
      <header>
        <Header search={search} setSearch={setSearch} />
      </header>
      <div className="galleryItems">
        {
          gallery.filter((curImg)=>{
            if(search === "" ) {
              return curImg;
            }else if(curImg.label.toLowerCase().includes(search.toLowerCase())){
              return curImg;
            }
          }).map((item, idx) => {
            return (
              <div className='item' key={idx}>
                <div className="img">
                  <img src={item.image} width='250px' alt='img'></img>
                </div>
                <div className="label">
                  <h4>{item.label}</h4>
                </div>
                <div className="delete">
                  <button onClick={()=> DeleteImg(item._id)} className='delete'> Delete </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery