import React from 'react'

const Loader = () => {
  return (
    <>
    <div className="vh-100 d-flex align-items-center justify-content-center">
       <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    </>
  )
}

export default Loader