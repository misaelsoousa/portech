import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './QuemSomos.css'
import arrowSvg from '../../assets/icons/arrow.svg'
import Laura from '../../assets/images/mulher.webp'
import BTP from '../../assets/images/brasilterminalportuario_logo.jpg'
import Mateus from '../../assets/images/mateus.avif'
import Transpetro from '../../assets/images/transpetro_petrobras_transporte_logo.jpg'
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
                    <div className="rounded-full left-2/4 -translate-x-2/4 w-24 h-24 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={BTP} alt="" className="w-full h-full object-cover hover:scale-125 transition duration-300" />
                    </div>
                    <span className="font-bold text-[30px]">Jorge</span>
                    <p className="text-gray-400 text-[15px] py-2">BTP - Brasil Terminal Portuário</p>
                    <p className="text-gray-300 text-[15px]">Nossa empresa estava com um sistema desatualizado e lento. A equipe da Portech fez uma atualização impecável, garantindo mais segurança e desempenho. Agora tudo roda muito mais rápido!</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 w-24 h-24 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Mateus} alt="" className="w-full h-full object-cover hover:scale-125 transition duration-300" />
                    </div>
                    <span className="font-bold text-[30px]">Mateus</span>
                    <p className="text-gray-400 text-[15px] py-2">Santos Brasil</p>
                    <p className="text-gray-300 text-[15px]">Contratamos a Portech para avaliar nosso parque tecnológico e encontramos várias oportunidades de economia sem perder desempenho. Excelente serviço!</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 w-24 h-24 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Laura} alt="" className="w-full h-full object-cover hover:scale-125 transition duration-300" />
                    </div>
                    <span className="font-bold text-[30px]">Laura</span>
                    <p className="text-gray-400 text-[15px] py-2">Santos Container</p>
                    <p className="text-gray-300 text-[15px]">Com a análise feita pela Portech, conseguimos reduzir em 30% os custos com tecnologia, sem comprometer a qualidade. Serviço essencial!</p>
                </div>
                <div className="bg-[#11161C] px-5 rounded-lg text-white text-center flex relative overflow-visible gap-10 py-16">
                    <div className="rounded-full left-2/4 -translate-x-2/4 w-24 h-24 overflow-hidden border-5 absolute top-0 -translate-y-2/4 border-gray-700">
                        <img src={Transpetro} alt="" className="w-full h-full object-cover hover:scale-125 transition duration-300" />
                    </div>
                    <span className="font-bold text-[30px]">Anônimo</span>
                    <p className="text-gray-400 text-[15px] py-2">Transpetro</p>
                    <p className="text-gray-300 text-[15px]">O suporte foi eficiente, mas tivemos algumas dificuldades no contato inicial. Seria ótimo ter um canal de atendimento mais direto e rápido.</p>
                </div>


            </Slider>

        </section>
    )
}

export default Feedback
