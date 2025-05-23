import React from 'react'
import Background from '../../components/Background'
import Nav from '@/app/components/Nav'
import Subscribe from '@/app/components/Subscribe'
import Footer from '@/app/components/Footer'
const page = () => {
  return (
    <>
    <Nav />
    <div className="">
        <div className=" relative  overflow-hidden flex flex-col justify-center gap-6 text-white items-center py-16">
            <div className="mx-auto test absolute lg:top-[28rem] "></div>
            <Background animation={true} />
            <div className="text-[#ffffffa0] z-[1]">Contact Us</div>
            <div className="text-4xl md:text-5xl text-center z-[1] font-semibold">Get in touch with us<br />to supercharge your growth in the digital era</div>
            <button className='px-8 py-3 bg-[#40CBFF] z-[1] text-black rounded-3xl font-semibold'>Get Started</button>
        </div>
        <div className="bg-white font-serif">
            <div className="px-8 max-w-[1120px] text-black mx-auto">
                <div className="flex w-full mx-auto pt-6 pb-12 md:py-16 flex-col md:flex-row">
                    <div className="flex-[0.8]   text-5xl font-medium">
                       <div className="md2:w-[420px]">
                    We are always reachable via email & social media
                    </div>
                    </div>
                   <div className="flex-1 flex items-start flex-col gap-12 ">
                       <div className="text-3xl underline font-semibold mt-6 md:mt-0"><a href="mailto:gm@chainfren.com">gm@Chainfren.com</a></div>
                           <div className="flex md:flex-col md:items-start gap-8">
                               <div className="flex gap-8  items-center">
                               <div className="">
            <a href="http://x.com/chainfren"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9525 7.91998C19.9647 8.0963 19.9647 8.27261 19.9647 8.45055C19.9647 13.8724 15.8371 20.1255 8.28966 20.1255V20.1223C6.06013 20.1255 3.8769 19.4869 2 18.2828C2.32419 18.3218 2.65001 18.3413 2.97664 18.3421C4.82429 18.3437 6.61913 17.7238 8.07272 16.5822C6.31688 16.5489 4.77717 15.404 4.23928 13.7327C4.85436 13.8513 5.48812 13.8269 6.09181 13.662C4.17753 13.2753 2.80033 11.5934 2.80033 9.64007C2.80033 9.6222 2.80033 9.60513 2.80033 9.58807C3.37071 9.90576 4.00934 10.0821 4.6626 10.1016C2.85964 8.89662 2.30388 6.49808 3.39265 4.6228C5.47593 7.18628 8.54966 8.74468 11.8493 8.90962C11.5186 7.48447 11.9703 5.99108 13.0364 4.98925C14.689 3.43572 17.2882 3.51535 18.8418 5.16719C19.7607 4.986 20.6415 4.64881 21.4475 4.17105C21.1412 5.12088 20.5001 5.9277 19.6437 6.4404C20.457 6.34452 21.2517 6.12677 22 5.79445C21.4491 6.61996 20.7552 7.33903 19.9525 7.91998Z" fill="black"/>
</svg></a>

             </div>
             <div className="">
           <a href="https://www.instagram.com/chainfren">  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.5556 3 9.2496 3.0102 8.2896 3.054C7.3314 3.0978 6.6768 3.2502 6.1044 3.4728C5.5044 3.6984 4.9602 4.0524 4.5102 4.5108C4.05253 4.96028 3.69831 5.5041 3.4722 6.1044C3.2508 6.6768 3.0978 7.332 3.054 8.2902C3.0108 9.2496 3 9.555 3 12C3 14.445 3.0102 14.7504 3.054 15.7104C3.0978 16.6686 3.2502 17.3232 3.4728 17.8956C3.6984 18.4956 4.0524 19.0398 4.5108 19.4898C4.96029 19.9475 5.50411 20.3017 6.1044 20.5278C6.6768 20.7498 7.3314 20.9022 8.2896 20.946C9.2496 20.9898 9.5556 21 12 21C14.4444 21 14.7504 20.9898 15.7104 20.946C16.6686 20.9022 17.3232 20.7498 17.8956 20.5272C18.4956 20.3016 19.0398 19.9476 19.4898 19.4892C19.9475 19.0397 20.3017 18.4959 20.5278 17.8956C20.7498 17.3232 20.9022 16.6686 20.946 15.7104C20.9898 14.7504 21 14.4444 21 12C21 9.5556 20.9898 9.2496 20.946 8.2896C20.9022 7.3314 20.7498 6.6768 20.5272 6.1044C20.3012 5.50384 19.947 4.95979 19.4892 4.5102C19.0397 4.05253 18.4959 3.69831 17.8956 3.4722C17.3232 3.2508 16.668 3.0978 15.7098 3.054C14.7504 3.0108 14.445 3 12 3ZM12 4.6218C14.403 4.6218 14.688 4.6308 15.6372 4.674C16.5144 4.7142 16.9908 4.86 17.3082 4.9842C17.7282 5.1468 18.0282 5.3424 18.3432 5.6568C18.6582 5.9718 18.8532 6.2718 19.0158 6.6918C19.1394 7.0092 19.2858 7.4856 19.326 8.3628C19.3692 9.312 19.3782 9.597 19.3782 12C19.3782 14.403 19.3692 14.688 19.326 15.6372C19.2858 16.5144 19.14 16.9908 19.0158 17.3082C18.8718 17.6991 18.6419 18.0528 18.3432 18.3432C18.0528 18.642 17.6992 18.8718 17.3082 19.0158C16.9908 19.1394 16.5144 19.2858 15.6372 19.326C14.688 19.3692 14.4036 19.3782 12 19.3782C9.5964 19.3782 9.312 19.3692 8.3628 19.326C7.4856 19.2858 7.0092 19.14 6.6918 19.0158C6.30087 18.8718 5.9472 18.6419 5.6568 18.3432C5.35811 18.0528 5.12828 17.6991 4.9842 17.3082C4.8606 16.9908 4.7142 16.5144 4.674 15.6372C4.6308 14.688 4.6218 14.403 4.6218 12C4.6218 9.597 4.6308 9.312 4.674 8.3628C4.7142 7.4856 4.86 7.0092 4.9842 6.6918C5.1468 6.2718 5.3424 5.9718 5.6568 5.6568C5.94716 5.35803 6.30085 5.12819 6.6918 4.9842C7.0092 4.8606 7.4856 4.7142 8.3628 4.674C9.312 4.6308 9.597 4.6218 12 4.6218Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.003C11.6057 15.003 11.2152 14.9254 10.8508 14.7744C10.4865 14.6235 10.1554 14.4023 9.87658 14.1235C9.59773 13.8446 9.37653 13.5136 9.22561 13.1492C9.0747 12.7849 8.99702 12.3944 8.99702 12C8.99702 11.6057 9.0747 11.2152 9.22561 10.8508C9.37653 10.4865 9.59773 10.1554 9.87658 9.87659C10.1554 9.59774 10.4865 9.37654 10.8508 9.22562C11.2152 9.07471 11.6057 8.99703 12 8.99703C12.7965 8.99703 13.5603 9.31342 14.1235 9.87659C14.6866 10.4398 15.003 11.2036 15.003 12C15.003 12.7965 14.6866 13.5603 14.1235 14.1235C13.5603 14.6866 12.7965 15.003 12 15.003ZM12 7.37403C10.7731 7.37403 9.59649 7.86141 8.72895 8.72896C7.8614 9.5965 7.37402 10.7731 7.37402 12C7.37402 13.2269 7.8614 14.4036 8.72895 15.2711C9.59649 16.1387 10.7731 16.626 12 16.626C13.2269 16.626 14.4036 16.1387 15.2711 15.2711C16.1386 14.4036 16.626 13.2269 16.626 12C16.626 10.7731 16.1386 9.5965 15.2711 8.72896C14.4036 7.86141 13.2269 7.37403 12 7.37403ZM17.9718 7.29003C17.9718 7.58005 17.8566 7.85818 17.6515 8.06325C17.4465 8.26833 17.1683 8.38353 16.8783 8.38353C16.5883 8.38353 16.3102 8.26833 16.1051 8.06325C15.9 7.85818 15.7848 7.58005 15.7848 7.29003C15.7848 7.00002 15.9 6.72188 16.1051 6.51681C16.3102 6.31174 16.5883 6.19653 16.8783 6.19653C17.1683 6.19653 17.4465 6.31174 17.6515 6.51681C17.8566 6.72188 17.9718 7.00002 17.9718 7.29003Z" fill="black"/>
</svg></a> 
             </div>
                               </div>
                           </div>




                   </div>
               </div>
                <div className="flex w-full mx-auto pt-12 pb-6 flex-col md:flex-row gap-10 md:gap-0 md:py-16 ">
                    <div className="flex-[0.8]  text-5xl font-medium">or Text us</div>
                    <div className="flex-1"><a href="https://wa.me/2348160250508?text=Hi%20Chainfren"><button className='py-[10px] rounded-3xl px-8 bg-gradient-to-r from-[#40CBFF] to-[#40FFCC] text-primary font-semibold'>Say Hi!</button></a>
                </div>
                </div>
                {/* 
 */}
            </div>
        </div>
    </div>
    <Subscribe />
    <Footer />
    </>
  )
}

export default page