import React from 'react'
import Container from '../../shared/helpers/Container.jsx'
import a from "../../shared/assets/Askat/a.svg"
import b from '../../shared/assets/Askat/b.svg'
import s from '../../shared/assets/Askat/s.svg'
import d from '../../shared/assets/Askat/d.svg'
import f from '../../shared/assets/Askat/f.svg'
import l from '../../shared/assets/Askat/l.svg'
import c from '../../shared/assets/Askat/c.svg'
import j from '../../shared/assets/Askat/j.svg'
import { Link } from 'react-router-dom'

import logo from '../../shared/assets/Askat/logo.svg'
import HeaderCarousel from './HeaderCarousel.jsx'

function Header() {
  return (
    <>
      <HeaderCarousel />
      <div className='bg-[#F7EBE5;] '>
        {/* <Container> */}
        <div className='flex gap-[20px] h-[48px] w-full ml-[100px]'>
          <h1 className='w-[143px] font-normal text-[14px] mt-4'>Гарантия свежести</h1 >

          <h5 className='w-[141px] font-normal text-[14px] mt-4'>Доставка и оплата</h5>

          <h3 className='w-[141px] font-normal text-[14px] mt-4'>Оптовые поставки</h3>

          <h5 className='w-[60px] h-[17px] mt-4'>Контакты</h5>
          <div className='flex gap-3 ml-[40px]'>
            <img className='w-[24px] h-[24px] mt-4' src={a} alt='' />
            <h5 className='w-[141px] font-normal text-[14px] mt-4'>Санкт-Петербург</h5>
            <img className='w-[9px] h-[6px] mt-6' src={j} alt='' />

            <div className='flex gap-1'>
              <img className='w-[24px] h-[24px] mt-4' src={b} alt='' />
              <h5 className='w-[141px] font-normal text-[14px] mt-4'>8 812 309-82-88</h5>
            </div>
            <div className='flex gap-2'>
              <img className='w-[24px] h-[24px] mt-4' src={s} alt='' />
              <h5 className='w-[141px] font-normal text-[14px] mt-4'>В корзине (4 товара)</h5>
            </div>
            <div className='flex gap-[15px]'>
              <img className='w-[24px] h-[24px] mt-4' src={d} alt='' />
              <img className='w-[24px] h-[24px] mt-4' src={f} alt='' />
              <img className='w-[24px] h-[24px] mt-4' src={l} alt='' />
              <Link to="/profile">
                <img className='w-[17px] h-[18px] mt-5' src="https://icon-library.com/images/img_202755_72578.png" alt="" />
              </Link >
            </div>
          </div>
        </div>
        {/* </Container> */}
      </div>
      <Container>
        <div className='flex gap-3 mt-7 items-center  justify-between'>
          <div className='flex items-center  justify-center'>
            <h4 >СЛАДКИЕ ДНИ</h4>
            <img className='bg-[#E7426A] rounded-full w-[24px] h-[24px] p-1  ml-3' src={c} alt='' />
          </div>


          <select name="cars" id="cars">
            <option value="volvo">подарочные наборы</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <h5 >Собрать набор</h5>
          <img src={logo} alt='' />
          <h5 className='w-[141px] h-[24px] '>Создать дизайн</h5>

          <select name="cars" id="cars">
            <option value="volvo">КОМПАНИЯМ</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars">
            <option value="volvo">ВЕСЬ КАТАЛОГ</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>


        </div>
      </Container>
      <div>

      </div>

    </>
  )
}

export default Header