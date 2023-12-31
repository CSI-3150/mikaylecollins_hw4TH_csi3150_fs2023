const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
    image: "./images/Camry,toyota.webp",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
    image: "./images/civic,honda.webp",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
    image: "./images/fusion,ford.webp",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
    image: "./images/altima,nissan.jpg",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
    image: "./images/malibu,chevrolet.jpg",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
    image: "./images/passat,volkswagon.webp",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
    image: "./images/elantra, hyundai.webp",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
    image: "./images/outback,subaru.webp",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
    image: "./images/modelS,tesla.webp",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
    image: "./images/sorrento,kia.webp",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
    image: "./images/challenger,dodge.webp",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
    image: "./images/XT5, cadillac.jpg",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
    image: "./images/F-pace,jaguar.webp",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
    image: "./images/modelS,tesla.webp",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
    image: "./images/cayenne,porsche.webp",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
    image: "./images/modelS,tesla.webp",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
    image: "./images/5,BMW.webp",
  },
];

function createCarCard(carArray) {
  const carContainer = document.getElementById("cargrid");
  carArray.forEach((car) => {
    car.price = car.price.toLocaleString();
    car.mileage = car.gasMileage.toLocaleString();
    car.make = car.make.toLocaleString();
    car.model = car.model.toLocaleString();
    car.color = car.color.toLocaleString();

    const card = document.createElement("div");
    card.className = "car-card";

    card.innerHTML = `
      
          <img src="${car.image}" class="card-img-top" alt="Car Image">
          
              <h2 class="card-title">${car.make} ${car.model}</h2>
              <p class="card-text">Year: ${car.year}</p>
              <p class="card-text">Color: ${car.color}</p>
              <p class="card-text">Price: $${car.price}</p>
              <p class="card-text">Mileage: ${car.mileage}</p>
              <p class="card-text">Gas Mileage: ${car.gasMileage}</p>
       `;
    carContainer.appendChild(card);
  });
}
createCarCard(usedCars);

document
  .getElementById("searchButton")
  .addEventListener("click", filterFeature);

function filterFeature() {
  clearCard();

  var copyofArray = usedCars.slice();

  const mileage = document.getElementById("mileageMax").value;
  const pMax = document.getElementById("priceMax").value;
  const pMin = document.getElementById("priceMin").value;
  const carMake = document.getElementById("carMake").value;
  const carColor = document.getElementById("carColor").value;
  const yMax = document.getElementById("yearMax").value;
  const yMin = document.getElementById("yearMin").value;
  copyofArray = filterAllCars(
    copyofArray,
    pMin,
    pMax,
    carMake,
    carColor,
    yMin,
    yMax,
    mileage
  );
  createCarCard(copyofArray);
}

function filterAllCars(
  array,
  pMin,
  pMax,
  carMake,
  carColor,
  yMin,
  yMax,
  mileage
) {
  var copyofArray = array.filter(function (car) {
    if (
      car.price >= pMin &&
      car.price <= pMax &&
      (carMake === "AllMakes" || car.make === carMake) &&
      (carColor === "AllColors" || car.color === carColor) &&
      car.year >= yMin &&
      car.year <= yMax &&
      car.mileage <= mileage
    ) {
      return true;
    }
  });

  return copyofArray;
}

//This function clears the div
function clearCard() {
  document.getElementById("cargrid").innerHTML = "";
}
