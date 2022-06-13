import React from 'react'
import Usecase from './Usecase';
import Usephoto from './Usephoto';
function Usecasecontainer() {
  return (

    <div className="lg:flex md:flex text-left gap-5 mt-20">
      <Usecase />
      <Usephoto />
    </div>
  )
}

export default Usecasecontainer