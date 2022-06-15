import React from 'react'
import Prudentialleft from './Prudentialleft';
import Prudentialright from './Prudentialright';
function Foundationcotainer() {
  return (
    <div className="grid grid-cols-2 font-inter gap-4 mt-5">
      <div><Prudentialleft /></div>
      <div><Prudentialright /></div>

    </div>

  )
}

export default Foundationcotainer