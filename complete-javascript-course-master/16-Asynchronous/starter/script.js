'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.capital}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span> ${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name} | ${
    data.currencies[0].code
  }
      </p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountryandNeighbor = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   // use v3.1 for updated versions
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render Country 1
//     renderCountry(data);

//     //Get neighbor country (2)
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     // use v3.1 for updated versions
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbor');
//       console.log(data2);
//     });
//   });
// };

// getCountryandNeighbor('usa');

// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v2/name/${country}');
// request.send();

////////////////////////////////////////////
// USING PROMISES

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  //Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      // const neighbor = data[0]?.borders[0]
      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error('No neighbor found');

      //Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbor'))
    // .catch(err => {
    //   console.error(`${err}`);
    //   renderError(`Something went wrong ${err.message}. Try again!`);
    // })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// // const getCountryData = function (country) {
// //   //Country 1
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(response => {
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //       // const neighbor = data[0]?.borders[0]
// //       const neighbor = data[0].borders?.[0];

// //       if (!neighbor) return;

// //       //Country 2
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
// //     })
// //     .then(response => response.json())
// //     .then(data => renderCountry(data, 'neighbor'))
// //     // .catch(err => {
// //     //   console.error(`${err}`);
// //     //   renderError(`Something went wrong ${err.message}. Try again!`);
// //     // })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

btn.addEventListener('click', () => {
  getCountryData('Philippines');
});

// /////////////////////
// // Building a simple promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN');
//     } else {
//       reject('YOU LOSE');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited 1 second');
//   });

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.capital}, ${data.name}`);

//       // return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//       return fetch(`https://restcountries.com/v/name/${data.name}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);
