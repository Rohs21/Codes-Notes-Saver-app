import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {
  const pastes = useSelector((state)=>state.paste.pastes);
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste)=>paste.title.toLowercase().includes(searchTerm.toLowercase()));
    

  return (
    <div>
      
    </div>
  )
}

export default Paste
