// --------------------------------filter - example1: filtering premium users--------------------------------
// const users = [
//     {name: 'shaun', premium: true},
//     {name: 'yoshi', premium: false},
//     {name: 'mario', premium: false},
//     {name: 'chun-li', premium: true}
//   ];

//   const premiumUsers = users.filter(user => {
//       return user.premium;
//   });

  //console.log(premiumUsers);

  // --------------------------------map - example1: it alters the value of the array --------------------------------
//   const prices = [20, 45, 46, 89];
  
//   const alteredPrices = prices.map((price) => {
//       return price / 2;
//   })

//   console.log(alteredPrices);

//-------------------------------- map - example 2--------------------------------
// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
//   ];

// const mappedProducts = products.map((product) => {
//       if(product.price > 30) {
//         return {name: product.name, price: product.price / 2};
//       } else {
//           return product;
//       }
//   });

//   console.log(products, mappedProducts);


// -------------------------------- Reduce - returns any value that you want based on the orginial value of an array --------------------------------
// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70}
//   ];
  
// const marioScores = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario') {
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log('mario score', marioScores);


// -------------------------------- Find - returns the first matched value --------------------------------
// const scoress = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60},
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70}
//   ];

//   const matchedValue = scoress.find((score)  => {
//       return score.score === 50;
//   });

//   console.log(matchedValue);

  // -------------------------------- Sort - returns the first matched value --------------------------------
//   const players = [
//     {name: 'mario', score: 20},
//     {name: 'luigi', score: 10},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 30},
//     {name: 'shaun', score: 70}
//   ];

//   players.sort((a, b) => {
//       if(a.score > b.score) {
//           return -1;
//       } else if(b.score > a.score) {
//           return 1;
//       } else {
//           return 0;
//       }
//   });

//   players.sort((a, b) => {
//     return b.score - a.score;
//     });

//   console.log(players);

  // -------------------------------- chaining array methods --------------------------------
  const players = [
        {name: 'mario', score: 20},
        {name: 'luigi', score: 10},
        {name: 'chun-li', score: 50},
        {name: 'yoshi', score: 30},
        {name: 'shaun', score: 70}
      ];

      const newPlayers = players.filter((player) => player.score > 50).map((player) => `Player ${player.name} has ${player.score}`);
      console.log(newPlayers);