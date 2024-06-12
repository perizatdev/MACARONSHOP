import one from '../../shared/assets/Peri/present1.png'
import two from "../../shared/assets/Peri/present2.png";
import three from "../../shared/assets/Peri/present3.png";
import four from "../../shared/assets/Peri/present4.png";

import Container from "../../shared/helpers/Container";

export default function Presents() {
    return (
        <>
            <Container>
                <div>
                    <div>
                        <h3 className="pt-[100px] text-[30px] font-semibold flex items-center ml-[399px] ">Мы обо всём позаботились</h3>
                    </div>
                    <div className="flex gap-[30px]">
                        <div className="pt-[40px]">
                            <img className="w-[270px] h-[270px] " src={one} alt="Present 1" />
                            <h4 className="pt-[29px] text-[18px] font-semibold">Лучшие ингредиенты</h4>
                            <p className="text-[14px] font-normal pt-[11px] text-[#292929] w-[250px]">Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
                        </div>

                        <div className="pt-[40px]">
                            <img className="w-[270px] h-[270px] " src={two} alt="Present 1" />
                            <h4 className="pt-[29px] text-[18px] font-semibold">Упаковка</h4>
                            <p className="text-[14px] font-normal pt-[11px] text-[#292929] w-[269px]">Что-то про суперкоробочки и бантики и бла бла бла</p>
                        </div>

                        <div className="pt-[40px]">
                            <img className="w-[270px] h-[270px] " src={three} alt="Present 1" />
                            <h4 className="pt-[29px] text-[18px] font-semibold">Получение в день заказа</h4>
                            <p className="text-[14px] font-normal pt-[11px] text-[#292929] w-[260px]">В день заказа доставка курьером или самовывоз</p>
                        </div>

                        <div className="pt-[40px]">
                            <img className="w-[270px] h-[270px] " src={four} alt="Present 1" />
                            <h4 className="pt-[29px] text-[18px] font-semibold">Анонимная доставка</h4>
                            <p className="text-[14px] font-normal pt-[11px] text-[#292929] w-[230px]">Можем преподнести Ваш заказ как анонимный подарок</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
