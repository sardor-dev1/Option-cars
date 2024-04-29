let products = [
  {
    id: 4,
    name: "Gelik",
    img: "https://biznesrivoj-images.s3.eu-north-1.amazonaws.com/Dunyodagi_eng_tezkor_Gelik_taqdim_etildi_fda38b4ccf.png",
    cost: "350 200 $",
    count: 1,
    category: "mers",
    color: "blue",
  },

  {
    id: 13,
    name: "gentra",
    img: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/47b4d398e9aea68f35387c11274eaa62.webp",
    cost: "15 000 $",
    count: 3,
    color: "grey",
    category: "uzauto",
  },

  {
    id: 14,
    name: "spark",
    img: "https://hips.hearstapps.com/hmg-prod/images/2014-chevrolet-sparkev-061-1545253000.jpg?crop=0.725xw:0.544xh;0.237xw,0.376xh&resize=640:*",
    cost: "80 000 $",
    count: 3,
    color: "grey",
    category: "uzauto",
  },

  {
    id: 11,
    name: "porshe 911",
    img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-porsche-911-gt3-2021-rt-hero-front.jpg",
    cost: "180 000 $",
    count: 3,
    color: "red",
    category: "porshe",
  },
  {
    id: 5,
    name: "GLC 400",
    img: "https://www.mercedes-benz.com.hk/content/hong-kong/en/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq1.3395845990318.jpg/mercedes-benz-cle-coupe-c236-stage-3840x3840-06-2023.jpg",
    cost: "90 000 $",
    count: 3,
    category: "mers",
    color: "black",
  },
  {
    id: 6,
    name: "GLC 300",
    img: "https://autohangar.com/wp-content/uploads/2023/09/2023-Mercedes-Benz-GLC-300.png",
    cost: "70 000 $",
    count: 3,
    color: "white",
    category: "mers",
  },
  {
    id: 7,
    name: "R 8",
    img: "https://cdn.motor1.com/images/mgl/pb0klW/s1/2023-audi-r8-v10-gt-rwd-exterior.jpg",
    cost: "40 000 $",
    count: 3,
    color: "white",
    category: "audi",
  },

  {
    id: 1,
    name: "BMW M",
    img: "https://www.bmw.ca/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-08.jpg",
    cost: "120 200 $",
    count: 1,
    category: "bmw",
    color: "blue",
  },
  {
    id: 2,
    name: "BMW 7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5cPVCrUbwa0Nqh8_-4OZPWEbeHEivLbZ5vLwmbEtblA&s",
    cost: "100 000",
    count: 3,
    category: "bmw",
    color: "black",
  },
  {
    id: 3,
    name: "BMW M4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXmqo6fn_dNZMcyuKCzMTZsjEWlZLDbsX-HoCQHheEw&s",
    cost: "120 000",
    count: 3,
    color: "white",
    category: "bmw",
  },
  {
    id: 8,
    name: "audi m3",
    img: "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.595xw:0.668xh;0.0705xw,0.224xh&resize=768:*",
    cost: "140 000 $",
    count: 3,
    color: "white",
    category: "audi",
  },
  {
    id: 9,
    name: "audi 3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpjtOl1fUNlM8--AOTVoe9tmLKxAI0OVFoBABJ3aS-zxvQWNNMtw4V3_n31t_E-dm48w&usqp=CAU",
    cost: "100 000 $",
    count: 3,
    color: "white",
    category: "audi",
  },

  {
    id: 10,
    name: "porshe mmm",
    img: "https://configurator.porsche.com/model-start/pictures/718/extcam03.webp",
    cost: "100 000 $",
    count: 3,
    color: "black",
    category: "porshe",
  },

  {
    id: 12,
    name: "porshe flipp",
    img: "https://configurator.porsche.com/model-start/pictures/911/extcam03.webp",
    cost: "480 000 $",
    count: 3,
    color: "grey",
    category: "porshe",
  },

  {
    id: 15,
    name: "onix",
    img: "https://www.gazeta.uz/media/img/2022/10/ft8n9k16672249744928_l.jpg",
    cost: "180 000 $",
    count: 3,
    color: "black",
    category: "uzauto",
  },
];

let categorySelect = document.querySelector("#products__category-select");
let productCards = document.querySelector(".products__cards");

function mapCards(productsArr) {
  let productsTag = "";

  productsArr.map((el) => {
    productsTag += `
         <div class="products__card">
            <div class="products__card__img">
              <img src="${el.img}" alt="${el.name}" />
            </div>

            <div class="products__card__info">
              <h3 class="products__card__title">${el.name}</h3>
              <p class="products__card__desc">
                Lorem ipsum dolor, harum voluptatum exercitationem officiis
                voluptatibus animi id deserunt dignissimos obcaecati, facere
                suscipit quaerat expedita aperiam nisi aliquid ea, vitae at.
              </p>
            </div>
          </div> 
    `;
  });
  console.log(productsTag);
  productCards.innerHTML = productsTag;
}

categorySelect.addEventListener("change", (e) => {
  let changeCategory = e.target.value;
  filterCategory(changeCategory);
});

function filterCategory(changeCategory) {
  if (changeCategory === "all") {
    mapCards(products);
  } else {
    let resProduct = products.filter(
      (el) =>
        el.category.toLocaleLowerCase() === changeCategory.toLocaleLowerCase()
    );
    mapCards(resProduct);
  }
  localStorage.setItem("changeCategory", changeCategory);
}

let changeCategory = localStorage.getItem("changeCategory") || "all";
categorySelect.value = changeCategory;
filterCategory(changeCategory);
