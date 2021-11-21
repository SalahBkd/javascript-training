// timestamps
// const now = new Date();
// const createdAt = new Date('February 1 2020 7:30:59');

// const diff = now.getTime() - createdAt.getTime();
// const ago = Math.round(diff / 1000 / 60 / 60 / 24);

// console.log(`this post was created ${ago} days ago`);

// converting a timestamp into a date
// const timestamp  = 1580538659000;
// console.log(new Date(1580538659000));

// date-fns library 
const now = new Date();
console.log(dateFns.format(now, "dddd Do YYYY"));
