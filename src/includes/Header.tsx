import Logo from './../assets/images/logo.svg'
import hamburguer from './../assets/icons/hamburguer.svg'
import { useState } from 'react'
function Header() {
    const [headerMobile, setHeaderMobile] = useState(false);
    function toggleHeader() {
        setHeaderMobile(prev => !prev);
    }
    return (
        <>
            <section className='bg-[#11161C]  text-white hidden lg:block'>
                <div className='max-w-[1200px] py-6 font-bold mx-auto items-center flex justify-between'>
                    <a href="" className='hover:rotate-90 transition duration-500'>
                        <img src={Logo} alt="" className='w-16' />
                    </a>
                    <a href="#quemSomos" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Quem somos
                    </a>
                    <a href="#sobre" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Sobre
                    </a>
                    <a href="#missao" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Missão
                    </a>
                    <a href="#feedbacks" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Nossos clientes
                    </a>
                    <div className="flex text-[20px] gap-2">
                        <a href='tiktok.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                            <svg id="Capa_1" enable-background="new 0 0 512 512" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z" /></g></svg>
                        </a>
                        <a href='instagram.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </a>
                        <a href='facebook.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' viewBox="0 0 512 512">
                                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className='bg-[#11161C]  text-white lg:hidden'>
                <div className='max-w-[1200px] py-6 font-bold mx-auto items-center flex justify-between px-5'>
                    <a href="" className='hover:rotate-90 transition duration-500'>
                        <img src={Logo} alt="" className='w-16' />
                    </a>
                    <div className='bg-gray-700 p-3 rounded-lg cursor-pointer' onClick={toggleHeader}>
                        <img src={hamburguer} />
                    </div>

                    <div className={`bg-gray-700 gap-5 z-50 w-[400px] flex-col justify-between px-10 py-10 fixed right-0 top-0 h-full ${headerMobile ? "flex" : "hidden"}`}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex justify-end cursor-pointer' onClick={toggleHeader}>
                                X
                            </div>
                            <a href="#quemSomos" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                Quem somos
                            </a>
                            <a href="#sobre" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                Sobre
                            </a>
                            <a href="#missao" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                Missão
                            </a>
                            <a href="#feedbacks" className="text-[20px] relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                Nossos clientes
                            </a>
                        </div>
                        <div className="flex text-[20px] gap-2">
                            <a href='tiktok.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                                <svg id="Capa_1" enable-background="new 0 0 512 512" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m480.32 128.39c-29.22 0-56.18-9.68-77.83-26.01-24.83-18.72-42.67-46.18-48.97-77.83-1.56-7.82-2.4-15.89-2.48-24.16h-83.47v228.08l-.1 124.93c0 33.4-21.75 61.72-51.9 71.68-8.75 2.89-18.2 4.26-28.04 3.72-12.56-.69-24.33-4.48-34.56-10.6-21.77-13.02-36.53-36.64-36.93-63.66-.63-42.23 33.51-76.66 75.71-76.66 8.33 0 16.33 1.36 23.82 3.83v-62.34-22.41c-7.9-1.17-15.94-1.78-24.07-1.78-46.19 0-89.39 19.2-120.27 53.79-23.34 26.14-37.34 59.49-39.5 94.46-2.83 45.94 13.98 89.61 46.58 121.83 4.79 4.73 9.82 9.12 15.08 13.17 27.95 21.51 62.12 33.17 98.11 33.17 8.13 0 16.17-.6 24.07-1.77 33.62-4.98 64.64-20.37 89.12-44.57 30.08-29.73 46.7-69.2 46.88-111.21l-.43-186.56c14.35 11.07 30.04 20.23 46.88 27.34 26.19 11.05 53.96 16.65 82.54 16.64v-60.61-22.49c.02.02-.22.02-.24.02z" /></g></svg>
                            </a>
                            <a href='instagram.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                            </a>
                            <a href='facebook.com' className='bg-white rounded-full p-1 hover:bg-black flex duration-300 transition justify-center items-center w-7 h-7 group'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 fill-black group-hover:fill-white duration-300 transition' viewBox="0 0 512 512">
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Header
