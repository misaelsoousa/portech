import imageUm from '../../assets/images/60f9b408ae9b9a3407299baf_Programação para microcontroladores.jpg';
import imageDois from '../../assets/images/imagem2.jpeg';
import imageTres from '../../assets/images/o-que-faz-um-profissional-de-ti.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerHome.css'

function BannerHome() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true
    };

    return (
        <section className='bg-[#20262E] relative '>
            <Slider {...settings}>
                <div className=" overflow-hidden xl:max-h-[800px] relative">
                    <img src={imageDois} className="w-full object-cover h-[300px] lg:h-[500px] xl:h-[700px]" alt="" />
                    <h3 className="texto-banner z-20 max-w-[1000px] text-white text-[20px] md:text-[30px] xl:text-[50px] font-bold absolute top-1/4 left-0 pl-5 lg:pl-20 xl:pl-32 p-5 -translate-y-2/4">Tecnologia para sua empresa ou escritorio, sempre com qualidade!</h3>
                </div>
                <div className=" overflow-hidden xl:max-h-[800px] relative">
                    <img src={imageUm} className="w-full object-cover h-[300px] lg:h-[500px] xl:h-[700px]" alt="" />
                    <h3 className="texto-banner z-20 max-w-[1000px] text-white text-[20px] md:text-[30px] xl:text-[50px] font-bold absolute top-1/4 pl-5 lg:pl-20 xl:pl-32 p-5 -translate-y-2/4">Inove seu escritorio com o que ha de melhor em tecnologia!</h3>
                </div>
                <div className=" overflow-hidden xl:max-h-[800px] relative">
                    <img src={imageTres} className="w-full object-cover h-[300px] lg:h-[500px] xl:h-[700px]" alt="" />
                    <h3 className="texto-banner z-20 max-w-[1000px] text-white text-[20px] md:text-[30px] xl:text-[50px] font-bold absolute top-1/4 pl-5 lg:pl-20 xl:pl-32 p-5 -translate-y-2/4">Melhore sua empresa com maior eficiencia e confiabilidade!</h3>
                </div>

            </Slider>
        </section>
    )
}

export default BannerHome
