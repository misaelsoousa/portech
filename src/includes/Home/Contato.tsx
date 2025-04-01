function Contato() {
    return (
        <section className='  bg-[#20262E] my-32 px-2'>
            <div className="bg-[#11161C] rounded-lg px-5 lg:px-10 py-10 max-w-[1200px] mx-auto text-white placeholder:text-white">
                <h2 className="font-bold text-[40px] mb-12">Entre em contato conosco</h2>
                <form action="" className="">
                    <div className="flex gap-5 lg:flex-row flex-col">
                        <div className="w-full lg:w-2/4 flex flex-col gap-10">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[20px] font-bold mb-3">Nome Completo:</label>
                                <input type="text" className="bg-gray-300 rounded-sm py-2 text-black px-3" placeholder="Ex: Jorge da Silva" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[20px] font-bold mb-3">E-mail:</label>
                                <input type="text" className="bg-gray-300 rounded-sm py-2 text-black px-3" placeholder="Ex: jorge@portech.com.br" />
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 flex flex-col gap-10">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[20px] font-bold mb-3">Telefone de contato:</label>
                                <input type="text" className="bg-gray-300 rounded-sm py-2 text-black px-3" placeholder="Ex: (13) 9 8176-6653" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-[20px] font-bold mb-3">Assunto:</label>
                                <input type="text" className="bg-gray-300 rounded-sm py-2 text-black px-3" placeholder="Ex: Contratar serviço" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button className="bg-gray-700 px-5 py-2 rounded-sm hover:text-gray-700 hover:bg-white transition duration-300 cursor-pointer">Enviar</button>
                    </div>
                </form>
            </div >
        </section >
    )
}

export default Contato