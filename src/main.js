$(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
   
  });





import { heroContent} from "./data.js";

const box = document.querySelector(".hero__block");

box.innerHTML = heroContent.map((item) => 
    `<p class="text-[16px] text-[red] font-bold leading-[175%] mb-[12px]">${item.first_text}</p>
     <h1 class="text-[53px] text-[#000] font-bold  tracking-[0.01em] max-w-[644px] mb-[12px]">${item.title}</h1>
     <p class="text-[16px] font-bold leading-[175%] text-[#8a8fb9] max-w-[560px] mb-[32px]">${item.an_text}</p>
     <a class="text-[17px] font-semibold tracking-[0.02em] text-[#fff] bg-[#fb2e86] rounded-[2px] py-[17px] px-[40px]">${item.button}</a>
    `
)



import { item } from "./data.js";

const list = document.querySelector(".list");


list.innerHTML = item.map((item) =>

    `<li class="w-[270px] shadow bg-[#f6f7fb] text-center pt-[46px] ">
    <div class="w-[178px] ml-auto mr-auto mb-[12px]">
    <img src="${item.img}" alt="img">
    </div>
   
    <div class="mt-[25px] text-center bg-[#fff] pb-[12px]">
    <p class="text-[18px] font-bold text-[#fb2e86] mb-[12px]">${item.title}</p>
    <div class="w-[52px] ml-auto mr-auto mb-[12px]">
    <img src="${item.animg}" alt="img">
    </div>
    
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.text}</p>
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.price}</p>
    </div>
    </li> 


    <li class="w-[270px] shadow bg-[#f6f7fb] text-center pt-[46px] ">
    <div class="w-[178px] ml-auto mr-auto mb-[12px]">
    <img src="${item.img}" alt="img">
    </div>
   
    <div class="mt-[25px] text-center bg-[#fff] pb-[12px]">
    <p class="text-[18px] font-bold text-[#fb2e86] mb-[12px]">${item.title}</p>
    <div class="w-[52px] ml-auto mr-auto mb-[12px]">
    <img src="${item.animg}" alt="img">
    </div>
    
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.text}</p>
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.price}</p>
    </div>
    </li> 




    <li class="w-[270px] shadow bg-[#f6f7fb] text-center pt-[46px] ">
    <div class="w-[178px] ml-auto mr-auto mb-[12px]">
    <img src="${item.img}" alt="img">
    </div>
   
    <div class="mt-[25px] text-center bg-[#fff] pb-[12px]">
    <p class="text-[18px] font-bold text-[#fb2e86] mb-[12px]">${item.title}</p>
    <div class="w-[52px] ml-auto mr-auto mb-[12px]">
    <img src="${item.animg}" alt="img">
    </div>
    
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.text}</p>
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.price}</p>
    </div>
    </li> 



    <li class="w-[270px] shadow bg-[#f6f7fb] text-center pt-[46px] ">
    <div class="w-[178px] ml-auto mr-auto mb-[12px]">
    <img src="${item.img}" alt="img">
    </div>
   
    <div class="mt-[25px] text-center bg-[#fff] pb-[12px]">
    <p class="text-[18px] font-bold text-[#fb2e86] mb-[12px]">${item.title}</p>
    <div class="w-[52px] ml-auto mr-auto mb-[12px]">
    <img src="${item.animg}" alt="img">
    </div>
    
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.text}</p>
    <p class="text-[14px] font-normal text-[#151875] mb-[12px]">${item.price}</p>
    </div>
    </li> 
    `
   
)



import { dop } from "./data.js";


const lis = document.querySelector(".list_2");


lis.innerHTML = dop.map((item) =>
    `
    <li class="w-[360px] bg-[#f7f7f7] pt-[33px] shadow-lg ">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875]  ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px] mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>



    <li class="w-[360px] bg-[#f7f7f7] pt-[33px]  shadow-lg ">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875]  ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px]  mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>



    <li class="w-[360px] bg-[#f7f7f7] pt-[33px]  shadow-lg">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875]  ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px]  mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>




    <li class="w-[360px] bg-[#f7f7f7] pt-[33px]  shadow-lg ">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875]  ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px]  mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>




    <li class="w-[360px] bg-[#f7f7f7] pt-[33px]  shadow-lg ">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875]  ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px]  mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>



    <li class="w-[360px] bg-[#f7f7f7] pt-[33px] shadow-lg">
    <div class=" w-[223px] ml-auto mr-auto">
    <img src="${item.img}" alt="">
    </div>
   
    <div class="bg-[#fff] pt-[10px] flex items-center justify-between">
    <p class="text-[16px] font-normal text-[#151875] ml-[10px]">${item.about}</p>
    <div class="flex items-center gap-[10px]  mr-[10px]">
    <p class="text-[14px] font-normal text-[#151875]">${item.price}</p>
    <p class="text-[12px] font-normal text-[#fb2448] line-through">${item.last}</p>
    </div>
    </div>
    </li>
   
    ` 
)


import { info } from "./data.js";

const ab = document.querySelector(".about_list")

ab.innerHTML = info.map((item) => 
    `
    <li class="w-[270px] bg-[#fff] shadow-[0_8px_40px_0_rgba(49,32,138,0.05);] text-center pt-[60px] pb-[45px] px-[27px]">
    <div class="w-[65px] ml-auto mr-auto mb-[22px]">
    <img src="${item.img}" alt="">
    </div>
    <h3 class="text-[22px] font-semibold text-[#151875] mb-[20px]">${item.title}</h3>
    <p class="text-[16px] font-bold leading-[160%] text-[#797589] w-[217px] ml-auto mr-auto opacity-[1]">${item.text}</p>
    </li>


    <li class="w-[270px] bg-[#fff] shadow-[0_8px_40px_0_rgba(49,32,138,0.05);] text-center pt-[60px] pb-[45px] px-[27px]">
    <div class="w-[65px] ml-auto mr-auto mb-[22px]">
    <img src="${item.img}" alt="">
    </div>
    <h3 class="text-[22px] font-semibold text-[#151875] mb-[20px]">${item.title}</h3>
    <p class="text-[16px] font-bold leading-[160%] text-[#797589] w-[217px] ml-auto mr-auto opacity-[1]">${item.text}</p>
    </li>



    <li class="w-[270px] bg-[#fff] shadow-[0_8px_40px_0_rgba(49,32,138,0.05);] text-center pt-[60px] pb-[45px] px-[27px]">
    <div class="w-[65px] ml-auto mr-auto mb-[22px]">
    <img src="${item.img}" alt="">
    </div>
    <h3 class="text-[22px] font-semibold text-[#151875] mb-[20px]">${item.title}</h3>
    <p class="text-[16px] font-bold leading-[160%] text-[#797589] w-[217px] ml-auto mr-auto opacity-[1]">${item.text}</p>
    </li>



    <li class="w-[270px] bg-[#fff] shadow-[0_8px_40px_0_rgba(49,32,138,0.05);] text-center pt-[60px] pb-[45px] px-[27px]">
    <div class="w-[65px] ml-auto mr-auto mb-[22px]">
    <img src="${item.img}" alt="">
    </div>
    <h3 class="text-[22px] font-semibold text-[#151875] mb-[20px]">${item.title}</h3>
    <p class="text-[16px] font-bold leading-[160%] text-[#797589] w-[217px] ml-auto mr-auto opacity-[1]">${item.text}</p>
    </li>
    `
)