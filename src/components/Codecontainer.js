import React from 'react'
import Codephoto from './Codephoto';
import Coderight from './Coderight';
function Codecontainer() {
  return (
    <div className="grid  lg:grid-cols-2 lg:gap-6 mt-36 bg-slate-100 h-full ">
      <Codephoto />
      <Coderight />

    </div>
  )
}

export default Codecontainer