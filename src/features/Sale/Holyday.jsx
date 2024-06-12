import React from 'react'
import pancake from '../../shared/assets/Abu/pancake.svg'
import pancake2 from '../../shared/assets/Abu/pancake2.svg'
import pancake3 from '../../shared/assets/Abu/pancake3.svg'

function Holyday() {
  return (
    <>
    {/* <div className='border-dashed border-gray-500'></div> */}
    <div className='flex w-full justify-between px-12'>
        <img className='' src={pancake}/>
        <img src={pancake2}/>
        <img src={pancake3}/>
        <img src={pancake}/>
        <img src={pancake2}/>
        <img src={pancake3}/>
    </div>
    <div className='flex w-full justify-between'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-center w-[170px] h-[51px]'>Скоро День рождения близкого человека</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='w-[170px] h-[51px] text-center'>1 января Новый Год 2021</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className=' w-[170px] h-[51px]'>
                <p className='text-center'>14 февраля День Святого Валентина</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='w-[170px] h-[51px] text-center'>Скоро День рождения близкого человека</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='w-[170px] h-[51px] text-center'>8 марта Международный Женский День</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <p className='w-[170px] h-[51px] text-center'>Скоро День рождения близкого человека</p>
        </div>
    </div>
    </>
  )
}

export default Holyday