const menuproducts = [
  {
    category: "mac",
    title: "iMac 2017",
    price: "1300$",
    imgSrc: "./Img/imac.webp",
  },
  {
    category: "iphone",
    title: "iPhone 4S",
    price: "50$",
    imgSrc: "./Img/iphone-4.webp",
  },
  {
    category: "ipad",
    title: "iPad Air",
    price: "700$",
    imgSrc: "./Img/ipad-air.webp",
  },
  {
    category: "ipad",
    title: "iPad Mini",
    price: "600$",
    imgSrc: "./Img/ipad-mini.webp",
  },
  {
    category: "ipad",
    title: "iPad Pro",
    price: "800$",
    imgSrc: "./Img/ipad-pro.webp",
  },
  {
    category: "iphone",
    title: "iPhone 3G",
    price: "40$",
    imgSrc: "./Img/iphone-3.webp",
  },

  {
    category: "iphone",
    title: "iPhone 5S",
    price: "65$",
    imgSrc: "./Img/iphone-5s.webp",
  },
  {
    category: "mac",
    title: "macBook Pro",
    price: "1399$",
    imgSrc: "./Img/macbook-pro.webp",
  },

  {
    category: "iwatch",
    title: "iWatch 6 Series",
    price: "400$",
    imgSrc: "./Img/iwatch-6.webp",
  },

  {
    category: "mac",
    title: "macBook Air",
    price: "800$",
    imgSrc: "./Img/macbook-air.webp",
  },
  {
    category: "mac",
    title: "macBook 2015",
    price: "700$",
    imgSrc: "./Img/macbook-pro-2015.webp",
  },
  {
    category: "iwatch",
    title: "iWatch 8 Series",
    price: "600$",
    imgSrc: "./Img/iwatch-8.webp",
  },
  {
    category: "iphone",
    title: "iPhone 14 Pro Max",
    price: "1200$",
    imgSrc: "./Img/iphone-14.webp",
  },
];

const menuwrapper = document.querySelector(".menu-wrapper")
const allbtn = document.querySelectorAll(".btn");
const btncontainer = document.querySelector(".btn-container")

      //joj nov button muy hz button muy tet bit nov por te joj jos btn container kor bit por
// btncontainer.addEventListener("click",(e)=>{
//   const btntarget = e.target

//   allbtn.forEach(btn => {
//     //  console.log(btn);
//     btn.classList.remove("active")
//     btntarget.classList.add("active")
//   })
// })

    //ti 2
btncontainer.addEventListener("click",(e) =>{
  // const btntarget = e.target.classList.contains("btn");
  const btnid = e.target.dataset.id;
  // console.dir(btnid);
  
  allbtn.forEach((btn) => {
    if(btnid){//ber jenh name true hz 
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  })
})

    //jap theat all item for show 
allbtn.forEach((btn) => {
  btn.addEventListener("click",(e)=>{
    const id = e.currentTarget.dataset.id;
    const filtermenu = menuproducts.filter((item) => {
        return item .category == id;
        
      //oy vea jap yok te theat del yerng jong ban
      // return item.category == "iwatch";//return te category mac only
          //if item category = id ning show te item del mean id nus te

      // if(item.category == id){
      //   return item;

      //or like this also ok
      // return item.category == id;
      });
      if(id == "all"){
        showingproduct(menuproducts);
      }else{
        showingproduct(filtermenu);
      }
    })
  });
  
    //jap theat new arrow show on web
    // console.log(filtermenu);

  //   const displaymenu = filtermenu.map((p)=>{
  //       return `<article class="card">
  //                 <img src="${p.imgSrc}" alt="${p.titlle}" class="img" />
  //                 <h3 class="card-heading">${p.title}</h3>
  //                 <span class="price">${p.price}</span>
  //               </article>`
  //     }).join(""); 
  //     // console.log(showingproduct);
  //               //show all item in web if click all
  //     if(id == "all"){//
  //       menuwrapper.innerHTML = menuproducts.map((p)=>{
  //         return `<article class="card">
  //                   <img src="${p.imgSrc}" alt="${p.titlle}" class="img" />
  //                   <h3 class="card-heading">${p.title}</h3>
  //                   <span class="price">${p.price}</span>  
  //                 </article>`
  //       }).join(""); 
  //               //pseng pi ning click show tam id
  //     }else{
  //       menuwrapper.innerHTML = displaymenu;
  //     }
  //   })
  // })

      //tver oy merl khenh item ler website
      //foreach work ban until use selectorall
      //tver oy buton active
// allbtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // console.log(btn);
//     btn.classList.add("active")
//   })
// })


//make show all item from java to html

                        //domcontloaded kir work now
window.addEventListener("DOMContentLoaded", () => {
    showingproduct(menuproducts);
                        //jap yok item menuproducts all mok prer
  // const showingproduct = menuproducts.map((p) =>{
  //   return `<article class="card">
  //             <img src="${p.imgSrc}" alt="${p.titlle}" class="img" />
  //             <h3 class="card-heading">${p.title}</h3>
  //             <span class="price">${p.price}</span>
  //           </article>`
  // }).join(""); 
  // // console.log(showingproduct);
  //           //show all item into dom
  // menuwrapper.innerHTML = showingproduct;
})

      //make function tuk muy;  
const showingproduct = (arrayproducts) => {
    const displayproduct = arrayproducts
      .map((p) =>{
        return `<article class="card">
            <img src="${p.imgSrc}" alt="${p.titlle}" class="img" />
            <h3 class="card-heading">${p.title}</h3>
            <span class="price">${p.price}</span>
          </article>`
}).join(""); 
// console.log(showingproduct);
          //show all item into dom
menuwrapper.innerHTML = displayproduct;    
};



  //example and explain
// const array = [
//   {
//     id: 1,
//     title: "mac",
//     price: "120$",
//   },
//   {
//     id: 2,
//     title: "iphon",
//     price: "120$",
//   },
//   {
//     id: 3,
//     title: "mac",
//     price: "120$",
//   }
// ];

        //map()array prer dermbey make new array but also old array
        // or transform nov array new del yerng jong ban 
// const newarray = array.map(function(item){
//   return `<h1>${item.title}</h1>`;
// })
// console.log(newarray);

//        //join method return jea string
// const arr = newarray.join("");
// console.log(arr);

  //plov kat
// const newarray = array.map(function(item){
//   return `<h1>${item.title}</h1>`;
// }).join("");
// console.log(newarray);

        //fiilter return new array te tor te condition true
// const newarray = array.filter(item => {
//   return item.title == 'mac';
// })
// console.log(newarray);

//or method 2 
// const newarray = array.filter(item => {
//   if(item.title == "mac"){
//     return item;
//   }
// });
// console.log(newarray);




