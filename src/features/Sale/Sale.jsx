import React from 'react'
import Container from '../../shared/helpers/Container'
import Carousel from './Carousel'
import Holyday from './Holyday'

function Sale() {
  return (
    <div>
        <Container>
            <div className='w-[100px] mx-auto text-[30px] font-semibold text-[rgb(41,41,41)] mb-[50px] mt-[100px]'>Акция</div>
            <Carousel/>
            <div className='w-[400px] mx-auto text-[30px] font-semibold text-[rgb(41,41,41)] mb-[50px] mt-[140px]'>Ближайшие праздники</div>
            <Holyday/>
        </Container>
    </div>
  )
}

export default Sale