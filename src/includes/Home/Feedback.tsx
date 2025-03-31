import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './QuemSomos.css'
import arrowSvg from '../../assets/icons/arrow.svg'
import Laura from '../../assets/images/laura.jpg'
interface ArrowProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Feedback() {
    const PrevArrow = ({ onClick }: ArrowProps) => (
        <button
            className="slick-prev"
            style={{
                left: "10px",
                zIndex: 10,
                color: "white",
            }}
            onClick={onClick}
        >
            <img src={arrowSvg} alt="" className="" />
        </button>
    );

    const NextArrow = ({ onClick }: ArrowProps) => (
        <button
            className="slick-next"
            style={{
                right: "10px",
                zIndex: 10,
                fontSize: "30px",
                color: "white",
            }}
            onClick={onClick}
        >
            <img src={arrowSvg} alt="" />
        </button>
    );
    const settings = {
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow onClick={() => { }} />,
        nextArrow: <NextArrow onClick={() => { }} />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <section className=' max-w-[1200px] mx-auto feedback-section px-5' id="feedbacks">

            <Slider {...settings}>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-24" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Empresa tal</p>
                    <p className="text-gray-300 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc.</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-24" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Empresa tal</p>
                    <p className="text-gray-300 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc.</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-24" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Empresa tal</p>
                    <p className="text-gray-300 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc.</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-24" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Empresa tal</p>
                    <p className="text-gray-300 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc.</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-24" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Empresa tal</p>
                    <p className="text-gray-300 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tellus ut erat consequat auctor integer nulla nunc.</p>
                </div>

            </Slider>

        </section>
    )
}

export default Feedback
