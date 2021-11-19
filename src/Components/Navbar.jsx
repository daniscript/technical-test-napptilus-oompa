import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

const Navbar = ({ search }) => {

    function handleSearch(event) {
        event.preventDefault();
        const {target: { value: query }} = event;
        search(query.toLowerCase())
      }

    return (
        <div className="navbar-container">
            <div className="logo-home">
                <div className="logo-home-content">
                    
                    <Link className="home-link" style={{textDecoration: 'none', height: '100%'}} to="/">
                        <img src={'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png'} alt="" className="logo" />
                        <div className="logo-text">
                            Oompa Loompa's Crew
                        </div> 
                    </Link>
                </div>
            </div>
       
            <div className='search-container'>
                <div className="search">
                    <input type='text' placeholder="Search"  name='name' autoComplete='off' onChange={handleSearch} required />
                    <div className="search-image-wrap">
                            <img className="search-image" src={'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png'} alt="" />
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Navbar;