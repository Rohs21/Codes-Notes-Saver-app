import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
  const pastes = useSelector((state)=>state.paste.pastes);
  const [SearchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter(
          (paste)=>paste.title.toLowerCase().
          includes(SearchTerm.toLowerCase())
        );

    

  return (
    <div>
      <input className='p-2 rounded-2xl min-w-[600px] mt-5'
      type='search'
      placeholder='search here'
      value={SearchTerm}
      onChange={(e)=> setSearchTerm(e.target.validationMessage)}
      />

      <div>
        
      </div>
    </div>
  )
}

export default Paste
