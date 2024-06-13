import React from 'react'
import MacaLove from '../../features/MacaLove/MacaronLove'
import Presents from '../../features/MacaLove/Presents'
import Sale from '../../features/Sale/Sale.jsx'
import Nabor from '../../features/Nabor/ui/Nabor.jsx'


function HomePage() {
  return (
    <div>
       <MacaLove/>
       <Sale/>
       <Nabor/>
       <Presents/>
    </div>
  )
}

export default HomePage