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
      <input
      type='search'
      
      />
    </div>
  )
}

export default Paste
