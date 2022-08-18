import { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from 'components/shared/card/Card'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import { UserContext } from 'context/UserState'

export const FinancesSlider = () => {

    const { setCurrentMonth, monthlyExpenses } = useContext(UserContext)

    const getIndexSlide = (index = 0) => setCurrentMonth(index + 1)

    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                spaceBetween={20}
                onSlideChange={(e) => {
                    getIndexSlide(e.activeIndex)
                }}
            >

                {
                    monthlyExpenses.map(month => {
                        return (
                            <SwiperSlide key={month.id}>
                                <Card />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </>
    );
}

// REALIZAR MEJORAS DE RENDERIZADO Y UNAS LLAVES QUE SE REPITEN O ALGO ASI REVISAR
// CONSOLE, ADEMAS CADA QUE PASA EL SLIDE SE REPITE LA FUNCION DE OBTENER TODAS LAS SUMAS
// REVISAR SI SE PUEDE HACER POR CARD, REVISAR RENDERIZADO
