let KleurWaarde = 1;
console.log("Kleurwaarde = " + KleurWaarde);

let VelgenWaarde = 1;
console.log("velgen waarde = " + VelgenWaarde);

let BodyWaarde = 1;
console.log("body waarde = " + BodyWaarde);
let imageCar = document.querySelector('#CarBody');

document.addEventListener('DOMContentLoaded', function () {
    const ScrollSpeed = 200;
    const CssSetting = false;

    var swiper1 = new Swiper('#swiper1', {
        effect: "coverflow",
        speed: ScrollSpeed,
        cssMode: CssSetting,
        allowTouchMove: false,
        navigation: {
            nextEl: '#swiper1 .swiper-button-next',
            prevEl: '#swiper1 .swiper-button-prev',
        },
    });

    var swiper2 = new Swiper('#swiper2', {
        effect: "coverflow",
        speed: ScrollSpeed,
        cssMode: CssSetting,
        allowTouchMove: false,
        navigation: {
            nextEl: '#swiper2 .swiper-button-next',
            prevEl: '#swiper2 .swiper-button-prev',
        },
    });

    var swiper3 = new Swiper('#swiper3', {
        effect: "coverflow",
        speed: ScrollSpeed,
        cssMode: CssSetting,
        navigation: {
            nextEl: '#swiper3 .swiper-button-next',
            prevEl: '#swiper3 .swiper-button-prev',
        },
    });
});

const KleurKnopPrev = () => {
    KleurWaarde -= 1;
    ChangeKleur(KleurWaarde);

    console.log("Kleurwaarde = " + KleurWaarde);
}

const KleurKnopNext = () => {
    KleurWaarde += 1;
    ChangeKleur(KleurWaarde);

    console.log("Kleurwaarde = " + KleurWaarde);
}

const VelgKnopPrev = () => {
    VelgenWaarde -= 1;
    ChangeVelg(VelgenWaarde);

    console.log("velgen waarde = " + VelgenWaarde);
}

const VelgKnopNext = () => {
    VelgenWaarde += 1;
    ChangeVelg(VelgenWaarde);

    console.log("velgen waarde = " + VelgenWaarde);
}
const BodyKnopPrev = () => {
    BodyWaarde -= 1;
    ChangeBody(BodyWaarde);

    console.log("body waarde = " + BodyWaarde);
}

const BodyKnopNext = () => {
    BodyWaarde += 1;
    ChangeBody(BodyWaarde);

    console.log("body waarde = " + BodyWaarde);
}

const ChangeBody = (BodyWaarde) => {

    if (BodyWaarde === 1) {
        imageCar.src = '/images/hatchback-02.png';
    } else if (BodyWaarde === 2) {
        imageCar.src = '/images/suv.png';
    } else if (BodyWaarde === 3) {
        imageCar.src = '/images/sportcar-02.png';
    }

}

const ChangeVelg = (VelgenWaarde) => {
    let image = document.querySelector('#CarVelgen');

    if (VelgenWaarde === 1) {
        image.src = '/images/blue.png';
    } else if (VelgenWaarde === 2) {
        image.src = '/images/red.png';
    } else if (VelgenWaarde === 3) {
        image.src = '/images/green.png';
    }
}

const ChangeKleur = (KleurWaarde) => {
    let image = document.querySelector('#CarBody');

    if (KleurWaarde === 1) {
        console.log("red");
        image.style.filter  = 'invert(34%) sepia(49%) saturate(7485%) hue-rotate(345deg) brightness(115%) contrast(102%)';
    } else if (KleurWaarde === 2) {
        console.log("green");
        image.style.filter  = 'invert(72%) sepia(74%) saturate(991%) hue-rotate(64deg) brightness(103%) contrast(101%)';
    } else if (KleurWaarde === 3) {
        console.log("blue");
        image.style.filter  = 'invert(51%) sepia(69%) saturate(6308%) hue-rotate(209deg) brightness(106%) contrast(101%)';
    }
}

ChangeKleur(KleurWaarde);
ChangeVelg(VelgenWaarde);
ChangeBody(BodyWaarde);


const ClickFunction = () => {
    SendBuildData();
    ToResults();
}


const SendBuildData = () => {
    console.log("body waarde = " + BodyWaarde + " Velgen waarde = " +
        VelgenWaarde + " Kleur waarde = " + KleurWaarde);


    sessionStorage.setItem('Body', BodyWaarde);
    sessionStorage.setItem('Velgen', VelgenWaarde);
    sessionStorage.setItem('Kleur', KleurWaarde);
}
const ToResults = () => {
    location.href = 'results.html'
}


const OnLoadResults = () => {
    let image = document.querySelector('#CarBody');
    let image2 = document.querySelector('#CarVelgen');
    let image3 = document.querySelector('#CarKleur');

    console.log(image);

    if (sessionStorage.getItem("Body") == 1) {
        image.src = '/images/hatchback-02.png';
    } else if (sessionStorage.getItem("Body") == 2) {
        image.src = '/images/suv.png';
    } else if (sessionStorage.getItem("Body") == 3) {
        image.src = '/images/sportcar-02.png';
    }

    if (sessionStorage.getItem("Velgen") == 1) {
        image2.src = '/images/blue.png';
    } else if (sessionStorage.getItem("Velgen") == 2) {
        image2.src = '/images/red.png';
    } else if (sessionStorage.getItem("Velgen") == 3) {
        image2.src = '/images/green.png';
    }

    if (sessionStorage.getItem("Kleur") == 1) {
        image.style.filter = 'invert(34%) sepia(49%) saturate(7485%) hue-rotate(345deg) brightness(115%) contrast(102%)';
    } else if (sessionStorage.getItem("Kleur") == 2) {
        image.style.filter = 'invert(72%) sepia(74%) saturate(991%) hue-rotate(64deg) brightness(103%) contrast(101%)';
    } else if (sessionStorage.getItem("Kleur") == 3) {
        image.style.filter = 'invert(51%) sepia(69%) saturate(6308%) hue-rotate(209deg) brightness(106%) contrast(101%)';
    }
}

const baseURL = "https://www.amiiboapi.com/api/";
const endPoint = "amiibo/?gameseries=Super Mario";

const URL = baseURL + endPoint;
const list = document.querySelector('ul');

function GetCars() {
    getData(URL).then((data) => {
        const AllCars = data.cars;
        AllCars.forEach(AnCars => {
            const CarListElement =
                `
                    <li style="background-image: url('${AnCars.imageUrl}');">
						<h3>${AnCars.name}</h3>
                        <p>${AnCars.year}</p>
					</li>
				`;
            list.insertAdjacentHTML('beforeend', CarListElement);
        })
    })
}

/* <img src="${AnCars.image}" alt="${AnCars.name}"></img> */

async function getData(URL) {
    return (
        fetch(URL)
        .then(response => response.json())
        .then(jsonData => jsonData)
    );
}

// var options = {
//     direction: 'horizontal',
//     loop: 'true',
//     speed: 300,
//     cssMode: true,

//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction'
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }

// };