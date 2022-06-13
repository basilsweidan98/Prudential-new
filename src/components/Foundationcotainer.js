import React from 'react'
import Prudentialleft from './Prudentialleft';
import Prudentialright from './Prudentialright';
function Foundationcotainer() {
  return (
    <div className="grid grid-cols-2  lg:gap-6 md:gap-4 gap-2 mt-5">
      <div><Prudentialleft /></div>
      <div><Prudentialright /></div>

    </div>

  )
}

export default Foundationcotainer