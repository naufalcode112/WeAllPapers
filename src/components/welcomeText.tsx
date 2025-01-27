import React, { useState } from 'react'

const WelcomeText = () => {
  const [name, setName] = useState("")
  const [theCond, setTheCond ] = useState(false)
  const HandleName = (e) => {
    setName(e.target.value)
  }
  const setting = () => {
    setTheCond(true)
  }
  if (theCond === true) {
    return (
     <>
        <h2 className="text-left flex">Welcome, <div className="colored"> {name}</div></h2>
     </>
    )
  }
  return (
    <div>
      <input
        onChange={HandleName}
        query={name}
      />
      <button onClick={setting}>Set name</button>
      <h1>Welcome, {name}</h1>
    </div>
  )
}

export default WelcomeText
