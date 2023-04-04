import React, { useState } from 'react'
import logo from '../assests/logo.svg';
import AddImage from './AddImage';
import './header.css';

const Header = ({search, setSearch}) => {

  const [openModal, setOpenModal] = useState(false);
  function Open(){
    setOpenModal(true);
  }
  function Close(){
    setOpenModal(false);
  }

  return (
    <div className='headerContainer'>
      <div className="logo">
        <div className="icon">  <img src={logo} width="50px" alt='logo'></img></div>
        <div className="titleName">
          <h3>My Unsplash</h3>
          <p>dechallenges.io</p>
        </div>

      </div>
      <div className="search">
        <form>
          <div className="searchBox">
            <input type='text' placeholder='search by name' id='searchtext' onChange={(e) => { setSearch(e.target.value) }} value={search} />
          </div>
        </form>
      </div>
      <div className="addPhoto">
        <button onClick={Open}>Add a Photo</button>
      </div>
      { openModal && <AddImage Close={Close} /> }

    </div>
  )
}

export default Header