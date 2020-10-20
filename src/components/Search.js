import React from 'react';

const Search = () => {
  return (
    <div className='form-container'>
      <form className='form'>
        <input className='search-box' type='search' placeholder='Title, company, expertise or benefits'/>
        <input className='search-btn' type='submit'/>
      </form>
    </div>
  )
}

export default Search