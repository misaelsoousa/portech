import email from './../assets/images/email.svg'
import heart from './../assets/images/heart.svg'
import whats from './../assets/images/whats.svg'

function Footer() {
    return (
        <>
            <section className='max-w-[1200px] mx-auto bg-[#20262E] mt-10'>
                <div className=" rounded-3xl px-10 py-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className='text-white text-center flex justify-center flex-col items-center'>
                            <img src={email} alt="" className='w-12' />
                            <p className='font-bold my-6'>POR E-MAIL</p>
                            <span>Uma central de atendimento com total controle para melhor atende-los</span>
                            <p className='mt-6 text-blue-400'>contato@portech.com</p>
                        </div>
                        <div className='bg-[#11161C] rounded-xl h-[300px] py-10 mb-20 px-10 text-white text-center flex justify-between flex-col items-center'>
                            <img src={whats} alt="" />
                            <div>
                                <p className='font-bold'>POR WHATSAPP</p>
                                <span>Fale conosco agora mesmo!
                                    nossos atendentes retornará o seu contato.</span>
                            </div>
                            <p className='border-2 border-gray-700 px-10 py-3 hover:bg-gray-700 cursor-pointer transition duration-300 font-montserrat rounded-tl-lg rounded-bl-[100px] rounded-tr-[100px] rounded-br-lg font-bold'>13. 9 8176-6653</p>
                        </div>
                        <div className='text-white text-center flex justify-center flex-col items-center'>
                            <img src={heart} alt="" className='w-12' />
                            <p className='font-bold my-6'>REDES SOCIAIS</p>
                            <span>Utilize nossas redes para entrar
                                em contato conosco! </span>
                            <p className='mt-6 text-blue-400'>contato@portech.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full bg-[#11161C] flex justify-center text-gray-300 font-bold flex-col items-center py-5'>
                <span className='text-gray-200 text-[15px]'>PORTECH © Todos os direitos reservados</span>
                <p className='text-gray-600 text-[12px]'>Desenvolvido por <a href='github.com/misaelsoousa'> Misael </a>
                </p>
            </div>
        </>
    )
}

export default Footer