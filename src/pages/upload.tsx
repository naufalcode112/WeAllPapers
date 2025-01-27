import React, { useState } from 'react'

/*interface UploadProps {
  image: string;
  title: string;
  author: string;
}
**/
const UploadWP = () => {
  const [textile, setTextile] = useState([])
  const nama = []
  const handleAppend = () => {
    setTextile([...textile, ])
  }
  return (
   <>
     <input type="file" className="bg-indigo-500 w-15 h-5 text-white p-2" />
     <button className="bg-indigo-500 w-35 h-10 text-white" onClick={handleAppend}>Add</button>
     <h2>Hi, {textile}</h2>
   </>
  )
}

export default UploadWP
