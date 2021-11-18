import React from 'react';

const Navbar = ({ search }) => {

    function handleSearch(event) {
        event.preventDefault();
        const {target: { value: query }} = event
        search(query.toLowerCase())
      }

    return (
        <div className="navbar-container">
        <>
            <div className='search'>
                <input type='text' name='name' autoComplete='off' onChange={handleSearch} required />
                <label htmlFor='name' className='label-name'>
                <span className='content-name'>Search</span>
                </label>
            </div>
        </>
        </div>
      );
}
 
export default Navbar;