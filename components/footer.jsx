import React from 'react'

const footer = () => {
    return (

        <footer class="bg-black text-[#bcb9b9] font-robomon">
            <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div class="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
                    <div class="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
                        <h2 class="text-3xl font-semibold text-white md:text-5xl">
                            <span class="text-[#99ff52]">Emphasing
                            </span>  real innovation over typical tech solutions.
                        </h2>
                    </div>
                    <div class="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                        <div class="mb-4 flex max-w-[272px] items-start justify-start">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cafd61df1f2a234a2c_carbon_location-filled.svg" alt="" class="mr-3 inline-block w-6" />
                            <p>Vellore Institute of Technology, Vandalur - Kelambakkam Road Chennai, Tamil Nadu - 600 127</p>
                        </div>
                        {/* <div class="mb-4 flex max-w-[272px] items-start justify-start">
                            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cbfd61dff0af234a64_Message.svg" alt="" class="mr-3 inline-block w-6" />
                            <p>support@flowspark.co</p>
                        </div> */}
                    </div>
                </div>
                <div class="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
                <div class="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
                    {/* <div class="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
                        <a href="#" class="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#99ff52] sm:py-2 sm:pr-6 lg:pr-12">About</a>
                        <a href="#" class="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#99ff52] sm:py-2 sm:pr-6 lg:pr-12">Features</a>
                        <a href="#" class="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#99ff52] sm:py-2 sm:pr-6 lg:pr-12">Works</a>
                        <a href="#" class="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#99ff52] sm:py-2 sm:pr-6 lg:pr-12">Support</a>
                        <a href="#" class="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#99ff52] sm:py-2 sm:pr-6 lg:pr-12">Help</a>
                    </div> */}
                    <div class="max-[991px]:flex-none">
                        <p class="text-[#bcb9b9] max-[479px]:text-sm">© Copyright 2024. All rights reserved. DAO x BIC</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer
