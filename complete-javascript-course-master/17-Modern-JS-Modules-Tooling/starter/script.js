// Importing Module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// addToCart('brid', 369);
// console.log(price, totalQuantity);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('hotdog', 3);
add('bread', 4);

// console.log(cart);

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// // const data = await res.json();
// // console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1) };
// };

// const lastPost = getLastPost();
// console.log(lastPost);
// //Not clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//Introducing NPM :))

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 3,
    },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

if (module.hot) {
  module.hot.accept();
}
