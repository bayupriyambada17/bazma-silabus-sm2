const { kelasBaru, getKelasAsync, getKelasBaruAsync } = require("./arsitektur.js");

console.log(kelasBaru(1));
console.log(kelasBaru(2));
console.log(kelasBaru(3));

console.log('--- ---')

getKelasAsync(1)
  .then((element) => {
    console.log(element);
  })

// getKelasAsync(2)
//   .then((kelasRpl) => {
//     console.log(kelasRpl);
//   })

getKelasBaruAsync(3)
  .then((kelasMultimedia) => {
    console.log(kelasMultimedia);
  })