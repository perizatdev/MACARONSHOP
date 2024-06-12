import sevgi from '../../shared/assets/Peri/bagcraund.png'
import Container from "../../shared/helpers/Container"
import Cards from './Cards'
import Presents from './Presents'

export default function MacaLove() {
    return (
        <>
            <div className="bg-cover bg-center w-screen h-[500px] "
                style={{ backgroundImage: `url(${sevgi})`}}>
                <Container>
                    <div className='mt-[190px]'>
                        <div className=' text-[#292929 w-[500px] pt-[30px] ml-[700px]' >
                            <h4 className='text-[22px] flex items-center uppercase ml-[115px] font-semibold mt-[100px]'>Macaronshop</h4>
                            <div className='flex'>
                                <h5 className="ml-[150px]">--</h5>
                                <h5 className='text-[16px] items-center ml-50px] font-semibold'>since 2013</h5>
                                <h5>--</h5>
                            </div>
                            <h1 className='text-[42px] font-semibold items-center'>Настоящая любовь</h1>
                            <div className='text-[18px] font-normal w-[499px] h-[44px]'>
                                <p className='ml-[35px]'>Пирожные макарон и другие десерты</p>
                                <p className='mr-[55px]'>из натуральных ингредиентов, приготовленные с</p>
                                <p className='ml-[150px]'>любовью</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Cards />
            <Presents/>
        </>
    )
}