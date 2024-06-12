import React from 'react'
import Container from '../../../shared/helpers/Container'
import card from '../../../shared/assets/Abu/carousel.png'
import cart from '../../../shared/assets/Abu/card.svg'

function Nabor() {
  return (
    <div>
        <Container>
            <div className='w-[400px] mx-auto text-[30px] font-semibold text-[rgb(41,41,41)] mt-[107px] mb-[47px]'>Популярные наборы</div>
            <div>
              <div className='w-[370px] h-[459px]'>
                <img className='w-full h-[300px]' src={card}/>
                <p className='text-[rgb(41,41,41)] text-[20px] font-semibold w-[327px] mx-auto mt-[21px]' >Сердце</p>
                <p className='text-gray-500 text-base font-normal w-[327px] mx-auto mt-[14px]'>24 штуки в коробке в виде сердца. Ассорти из 6 вкусов</p>
                <div className='w-[327px] border-t border-gray-400 flex justify-between mx-auto mt-[28px]'>
                  <p className='text-[#E7426A] p-2'>1800 руб</p>
                  <div className='flex gap-[12px] w-[130px] border-l border-gray-400 p-2 text-[14px] font-semibold text-[rgb(41,41,41)]'>
                    <img src={cart}/>
                    <p>В карзину</p>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default Nabor