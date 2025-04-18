import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './QuemSomos.css'
import arrowSvg from '../../assets/icons/arrow.svg'
import Misael from '../../assets/images/Frame 4.jpg'
import Jessica from '../../assets/images/jessica.jpg'
import Tais from '../../assets/images/tais.jpg'
import Stefany from '../../assets/images/stefany.jpg'
import Alexandre from '../../assets/images/alexandre.jpg'
import perfil from '../../assets/icons/perfil.svg'
interface ArrowProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function QuemSomos() {
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
        <section className="bg-[#20262E] relative xl:mt-32 slide-quemsomos" id="quemSomos">
            <h2 className="text-white text-[40px] text-center font-bold mb-20">Nosso time</h2>
            <Slider {...settings}>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={Misael} className="w-full h-full object-cover group-hover:scale-125 transition duration-300" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Misael Elias</span>
                        <p className="text-gray-500">Especialista em Linux</p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={Alexandre} className="w-full h-full object-cover group-hover:scale-125 transition duration-300" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Alexandre Siqueira</span>
                        <p className="text-gray-500">Analista de Suporte e Implantação
                        </p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={Jessica} className="w-full h-full object-cover group-hover:scale-125 transition duration-300" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Jessica Padovani
                        </span>
                        <p className="text-gray-500">Diretora financeiro (CFO)</p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={Stefany} className="w-full group-hover:scale-125 transition duration-300 h-full object-cover" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Stefany Karoline</span>
                        <p className="text-gray-500">Consultora de TI</p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={Tais} className="w-full group-hover:scale-125 transition duration-300 h-full object-cover" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Thais Martins</span>
                        <p className="text-gray-500">Gerente de Projetos de TI </p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={perfil} className="w-full group-hover:scale-125 transition duration-300 h-full object-cover" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">Guilherme Nelson</span>
                        <p className="text-gray-500">Engenheiro de Virtualização</p>
                    </div>
                </div>
                <div className="slide-quemsomos group">
                    <div className="xl:w-80 2xl:w-96 xl:h-80 h-44 w-44 2xl:h-96 mx-auto overflow-hidden rounded-full bg-white imagem">
                        <img src={perfil} className="w-full group-hover:scale-125 transition duration-300 h-full object-cover" alt="" />
                    </div>
                    <div className="mx-auto text-white text-center">
                        <span className="text-[30px] font-bold">João Paulo</span>
                        <p className="text-gray-500">Especialista em Segurança da Informação </p>
                    </div>
                </div>
            </Slider>
        </section>
    );
}

export default QuemSomos;