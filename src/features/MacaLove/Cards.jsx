import Container from "../../shared/helpers/Container"
import card from '../../shared/assets/Peri/card1.png'
import card2 from '../../shared/assets/Peri/card2.png'
import card3 from '../../shared/assets/Peri/card3.png'
import card4 from '../../shared/assets/Peri/card4.png'
import card5 from '../../shared/assets/Peri/card5.png'
import card6 from '../../shared/assets/Peri/card6.png'

import macaron from "../../shared/assets/Peri/macaron1.svg"
import macaron2 from "../../shared/assets/Peri/macaron2.svg"
import macaron3 from "../../shared/assets/Peri/macaron3.svg"
import macaron4 from "../../shared/assets/Peri/macaron4.svg"
import macaron5 from "../../shared/assets/Peri/macaron5.svg"
import macaron6 from "../../shared/assets/Peri/macaron6.svg"
import vector from "../../shared/assets/Peri/Vector.svg"
export default function Cards() {
    return (

        <>
            <Container>
                <div className="flex flex-col gap-[30px]">
                    <div className=" flex w-full justify-between">

                        <div>
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[185px] mt-[20px]">Готовые наборы</h4>
                                    <img className="mt-[5px] ml-[5px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[170px] mt-[10px]">Готовые наборы со скидкой.</p>
                                <p className="text-[16px] font-normal items-center  ml-[80px]">Вы можете подобрать набор на подходящий случай.</p>
                            </div>
                        </div>

                        <div className="">
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card2})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron2} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[185px] mt-[20px]">Собрать свой набор</h4>
                                    <img className="mt-[5px] ml-[5px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[120px] mt-[10px]">Выбрать количество макарун, и выбрать вкусы</p>
                            </div>
                        </div>
                    </div>




                    <div className=" flex w-full justify-between mt-[45px]">

                        <div>
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card3})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron3} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[95px] mt-[20px]">Набор с индивидуальной печатью</h4>
                                    <img className="mt-[25px] ml-[10px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[90px] mt-[10px]">Собрать набор макарон с уникальным дизайном. </p>

                            </div>
                        </div>

                        <div className="">
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card4})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron4} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[155px] mt-[20px]">Свадебные предложения</h4>
                                    <img className="mt-[25px] ml-[10px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[110px] mt-[10px]">Нежные пирожные макаронс с разными вкусами для</p>
                                <p className="text-[16px] font-normal items-center  ml-[160px]">украшения вашего свадебного торжества</p>
                            </div>
                        </div>
                    </div>



                    <div className=" flex w-full justify-between mt-[45px]">

                        <div>
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card5})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron5} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[150px] mt-[20px]">Корпоративные подарки</h4>
                                    <img className="mt-[25px] ml-[10px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[125px] mt-[10px]">От 85 руб за шт. С уникальным дизайном. </p>
                                <p className="text-[16px] font-normal items-center  ml-[110px] mt-[10px]">Приятный комплимент для коллег и партнеров </p>

                            </div>
                        </div>

                        <div className="">
                            <div
                                className="bg-cover bg-center h-[260px] w-[570px]"
                                style={{ backgroundImage: `url(${card6})` }}>
                            </div>
                            <div className="relative">
                                <img className="mt-[-225px] ml-[230px]" src={macaron6} alt="" />
                                <div className="flex">
                                    <h4 className="font-semibold text-[20px] items-center leading-5 ml-[185px] mt-[20px]">Оптовые поставки</h4>
                                    <img className="mt-[25px] ml-[10px]" src={vector} alt="" />
                                </div>
                                <p className="text-[16px] font-normal items-center  ml-[130px] mt-[10px]">Предложение для кофеен, кафе, отелей и т.д.</p>
                                <p className="text-[16px] font-normal items-center  ml-[115px]">Посмотрите условия сотрудничества и отзывы.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}