import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle  subHeading ={"From 11.00am to 10.00pm"}
            heading={"Order Online"}>
           
        </SectionTitle>

            <div className='mt-20 '>
                    <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" />  <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /> <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p> </SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" />  <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" />  <p className='text-4xl uppercase text-center -mt-16 text-white'>salad</p></SwiperSlide>
                </Swiper>
        </div>
       </section>
    );
};

export default Category;

