import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste } from "../redux/pasteSlice";

const Home = () => {
  // for title value tracking
  const [title, setTitle] = useState("");
  // for content value tracking
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),

    }

    if(pasteId){
      // if pasteID is available ,Update paste ID:
      dispatch(updateToPaste(paste));
    }
    else {
      //else create paste ID:
      dispatch(addToPaste(paste));
    }

    //after creation or updation we need to clear the title,therefore:
    setTitle('');
    setValue('');
    setSearchParams({});

  };

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'>
      <input className='p-1 rounded-2xl mt-2 w-[67%] pl-5'
        type='text'
        placeholder='Enter Title here'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

    <button onClick={createPaste} className='p-2 rounded-2xl mt-2 '>
      {
        pasteId ? "Update Note" : "Create Note"
      }
    </button>
    </div>

    <div className='mt-8'>
      <textarea className='rounded-2xl mt-4 min-w-[500px] p-4'
      value={value}
      placeholder="Enter content here"
      onChange={(e)=>setValue(e.target.value)}
      rows={30}
      
     
      />
    </div>
  </div>
    
  );
};

export default Home
