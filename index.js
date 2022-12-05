const inputFlightStartDate = document.getElementById("input-flight-startdate");
const inputFlightEndDate = document.getElementById("input-flight-enddate");
const inputHotelStartDate = document.getElementById("input-hotel-startdate");
const inputHotelEndDate = document.getElementById("input-hotel-enddate");
const inputCarStartDate = document.getElementById("input-car-startdate");
const inputCarEndDate = document.getElementById("input-car-enddate");
const flightSearchButton = document.getElementById("flight-button-search");
const flightClearButton = document.getElementById("flight-button-clear");
const hotelSearchButton = document.getElementById("hotel-button-search");
const hotelClearButton = document.getElementById("hotel-button-clear");
const carSearchButton = document.getElementById("car-button-search");
const carClearButton = document.getElementById("car-button-clear");
const inputFrom = document.getElementById("input-from");
const inputTo = document.getElementById("input-to");
const buttonHotelStars = document.getElementById("button-hotel-stars");
const hotelCountryMenu = document.getElementById("hotel-country-menu");
const buttonHotelCountryMenu = document.getElementById("button-hotel-country-menu");
const hotelCityMenu = document.getElementById("hotel-city-menu");
const buttonHotelCityMenu = document.getElementById("button-hotel-city-menu");
const carCountryMenu = document.getElementById("car-country-menu");
const buttonCarCountryMenu = document.getElementById("button-car-country-menu");
const carCityMenu = document.getElementById("car-city-menu");
const buttonCarCityMenu = document.getElementById("button-car-city-menu");

const currentDate = new Date();

const star1 = document.getElementById("star1");
const stars = document.querySelectorAll(".star");
const type = document.querySelectorAll(".type");

const business = document.getElementById("business");
const economy = document.getElementById("economy");

const buttonCarType = document.getElementById("button-car-type");

type.forEach((tp) => {
  tp.addEventListener("click", () => {
    const type = tp.getAttribute("id");
    buttonCarType.innerHTML = tp.innerHTML;
  });
});

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const startAmount = star.getAttribute("value");
    buttonHotelStars.innerHTML = star.innerHTML;
  });
});

const fetchRequestCountry = () => {
  const url = "https://namaztimes.kz/ru/api/country?type=json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      getCountryHotel(data);
      getCountryCar(data);
    })
    .catch(console.log("Uncorrect data"))
    .finally(console.log("Please check out your data"));
};
fetchRequestCountry();

const getCountryHotel = (data) => {
  for (let countryHotel of Object.entries(data)) {
    let dropdownItemHotel = document.createElement("a");
    dropdownItemHotel.className = "dropdown-item";
    dropdownItemHotel.innerHTML = countryHotel;

    let liItemHotel = document.createElement("li");

    hotelCountryMenu.appendChild(liItemHotel);
    liItemHotel.appendChild(dropdownItemHotel);

    dropdownItemHotel.addEventListener("click", () => {
      buttonHotelCountryMenu.innerHTML = countryHotel;
    });
  }
};

const fetchRequestCity = () => {
  const url = "https://namaztimes.kz/ru/api/cities?id=almaty&type=json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      getCityHotel(data);
      getCityCar(data);
    })
    .catch(console.log("Uncorrect data"))
    .finally(console.log("Please check out your data"));
};

fetchRequestCity();

const getCityHotel = (data) => {
  for (let cityHotel of Object.entries(data)) {
    let dropdownItemHotel = document.createElement("a");
    dropdownItemHotel.className = "dropdown-item";
    dropdownItemHotel.innerHTML = cityHotel;

    let liItemHotel = document.createElement("li");

    hotelCityMenu.appendChild(liItemHotel);
    liItemHotel.appendChild(dropdownItemHotel);

    dropdownItemHotel.addEventListener("click", () => {
      buttonHotelCityMenu.innerHTML = cityHotel;
    });
  }
};

const getCountryCar = (data) => {
  for (let countryCar of Object.entries(data)) {
    let dropdownItemCar = document.createElement("a");
    dropdownItemCar.className = "dropdown-item";
    dropdownItemCar.innerHTML = countryCar;

    let liItemCar = document.createElement("li");

    carCountryMenu.appendChild(liItemCar);
    liItemCar.appendChild(dropdownItemCar);

    dropdownItemCar.addEventListener("click", () => {
      buttonCarCountryMenu.innerHTML = countryCar;
    });
  }
};

const getCityCar = (data) => {
  for (let cityCar of Object.entries(data)) {
    let dropdownItemCar = document.createElement("a");
    dropdownItemCar.className = "dropdown-item";
    dropdownItemCar.innerHTML = cityCar;

    let liItemCar = document.createElement("li");

    carCityMenu.appendChild(liItemCar);
    liItemCar.appendChild(dropdownItemCar);

    dropdownItemCar.addEventListener("click", () => {
      buttonCarCityMenu.innerHTML = cityCar;
    });
  }
};

flightSearchButton.addEventListener("click", () => {
  const flightStartDate = new Date(inputFlightStartDate.value);
  currentDate.getTime() <= flightStartDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  const flightEndDate = new Date(inputFlightEndDate.value);
  flightEndDate.getTime() >= currentDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  inputFrom.value;
  inputTo.value;

  if (flightStartDate && flightEndDate && inputFrom && inputTo) {
    hotelSearchButton.disabled = false;
  }
});

flightClearButton.addEventListener("click", () => {
  inputFlightStartDate.value = "";
  inputFlightEndDate.value = "";
  inputFrom.value = "";
  inputTo.value = "";
});

hotelSearchButton.addEventListener("click", () => {
  const hotelStartDate = new Date(inputHotelStartDate.value);
  currentDate.getTime() <= hotelStartDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  const hotelEndDate = new Date(inputHotelEndDate.value);
  hotelEndDate.getTime() >= currentDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  buttonHotelStars.innerHTML;
  buttonHotelCountryMenu.innerHTML;
  buttonHotelCityMenu.innerHTML;

  if (hotelStartDate && hotelEndDate && buttonHotelStars && buttonHotelCountryMenu && buttonHotelCityMenu) {
    hotelSearchButton.disabled = false;
  }
});

hotelClearButton.addEventListener("click", () => {
  inputHotelStartDate.value = "";
  inputHotelEndDate.value = "";
  buttonHotelStars.innerHTML = star1.innerHTML;
  buttonHotelCountryMenu.innerHTML = "";
  buttonHotelCityMenu.innerHTML = "";
});

carSearchButton.addEventListener("click", () => {
  const carStartDate = new Date(inputCarStartDate.value);
  currentDate.getTime() <= carStartDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  const carEndDate = new Date(inputCarEndDate.value);
  carEndDate.getTime() >= currentDate.getTime()
    ? console.log("Correct date")
    : console.log("Please write correct date");
  buttonCarType.innerHTML;
  buttonCarCountryMenu.innerHTML;
  buttonCarCityMenu.innerHTML;

  if (carStartDate && carEndDate && buttonCarType && buttonCarCountryMenu && buttonCarCityMenu) {
    carSearchButton.disabled = false;
  }
});

carClearButton.addEventListener("click", () => {
  inputCarStartDate.value = "";
  inputCarEndDate.value = "";
  buttonCarType.innerHTML = "Business";
  buttonCarCountryMenu.innerHTML = "";
  buttonCarCityMenu.innerHTML = "";
});
